// hapjs
// http://github.com/hapjs/tethys

// "font-size" to "fontSize"
function camelCase (key) {
    return key.replace(/(-([a-z]))/g, function (s, s1, s2) {
        return s2.toUpperCase();
    });
};

// 查询/设置：单个/多个值
function valueHandler (args, getter, setter) {
    var attrs = {};
    var keys;
    var key = args[0];
    var value = args[1];

    if (typeof key === 'object') {
        // 设置多个值
        attrs = key;
    } else if (args.length > 1) {
        // 设置单个值
        attrs[key] = value;
    } else {
        // 查询单个值
        return this[0] && key ? getter(this[0], key) : null;
    };

    keys = Object.keys(attrs);

    // 设置值
    return this.each(function (el) {
        keys.forEach(function (key) {
            setter(el, key, attrs[key]);
        });
    });
};

// 获取最终样式
function getComputedStyle (el, name) {
    return (window.getComputedStyle(el) || {})[name];
}

// 获取数值部分
function getNumber (val) {
    return +val.replace(/\D*/g, '');
}

function fireEvent (el, eventName) {
    if (typeof el.dispatchEvent !== 'function') return false;

    var fire = function (EventClass, opt) {
        var event;

        if (typeof EventClass === 'string') {
            event = document.createEvent(EventClass);
            event.initEvent(eventName, true, true);
            event.synthetic = true;
        } else {
            event = new EventClass(eventName, tethys.extend({
                view: window,
                bubbles: true,
                cancelable: true
            }, opt));
        };

        return el.dispatchEvent(event, true);
    };

    switch (eventName) {
    case 'mousedown':
    case 'mouseup':
    case 'mousemove':
    case 'click':
    case 'dblclick':
    case 'mouseover':
    case 'mouseout':
    case 'mouseenter':
    case 'mouseleave':
    case 'contextmenu':
        return fire(MouseEvent);
    case 'focus':
    case 'blur':
        return fire(FocusEvent);
    case 'select':
    case 'change':
        return fire('HTMLEvents');
    default:
        throw new Error('trigger: Couldn\'t find an event class for event "' + eventName + '"');
    }
}

// 查找节点，返回一个可操作的节点数组
function tethys (selector, context) {
    var nodes = [];

    // 把参数转换为包含Node的数组
    if (selector.each && selector.on) {
        // tethys 对象
        return selector;
    } else if (typeof selector === 'string') {
        // html代码或选择器
        if (selector.match(/^[^\b\B]*\</)) {
            // html代码
            nodes = tethys.parseHtml(selector);
        } else {
            // 选择器
            nodes = (context || document).querySelectorAll(selector);
        };
    } else if (Array.isArray(selector) || selector.constructor === NodeList) {
        // 包含节点的数组或NodeList
        nodes = selector;
    } else {
        // 节点
        nodes = [selector];
    };

    // 当Node被appendChild方法添加到其它元素中后，该Node会被从它所在的NodeList中移除
    // 为了避免这种情况，我们要把NodeList转换成包含Node的数组
    nodes = Array.prototype.map.call(nodes, function (n) {
        return n;
    });

    // 给数组添加dom操作方法
    tethys.extend(nodes, tethys.fn);

    return nodes;
};

// 扩展
tethys.extend = function () {
    var args = arguments;
    var deep = false;
    var dest;
    var prop = Array.prototype;

    if (typeof args[0] === 'boolean') {
        deep = prop.shift.call(args);
    };

    dest = prop.shift.call(args);

    prop.forEach.call(args, function (src) {
        if (!src) return;
        Object.keys(src).forEach(function (key) {
            if (deep && typeof src[key] === 'object' && typeof dest[key] === 'object') {
                tethys.extend(true, dest[key], src[key]);
            } else if (typeof src[key] !== 'undefined') {
                dest[key] = src[key];
            };
        });
    });
    return dest;
};

// 合并数组
tethys.merge = function (ary1, ary2) {
    (ary2 || []).forEach(function (n) {
        ary1.push(n);
    });
};

// 把html代码转换成NodeList
tethys.parseHtml = function (str) {
    var div = document.createElement('DIV');
    div.innerHTML = str;
    return div.childNodes;
};

// 微型模板
tethys.tpl = function (s, o) {
    var SUBREGEX = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;
    return s.replace ? s.replace(SUBREGEX, function (match, key) {
        return typeof o[key] === 'undefined' ? match : o[key];
    }) : s;
};

//
tethys.fn = {

    // 遍历
    each: function (fn) {
        Array.prototype.forEach.call(this || [], fn);

        return this;
    },

    // 绑定事件
    on: function (events, fn) {
        events = events.split(/\s*\,\s*/);

        return this.each(function (el) {
            fn = fn.bind(el);

            events.forEach(function (event) {
                el.addEventListener(event, fn);
            });
        });
    },

    // 触发事件
    trigger: function (eventName) {
        return this.each(function (el) {
            fireEvent(el, eventName);
        });
    },

    // 查询/设置元素的实际样式
    // css('color')
    // css('color', 'red')
    // css({ color: 'red' })
    css: function (key, value) {
        return valueHandler.call(this, arguments, function (el) {
            // 查询样式
            return getComputedStyle(el, camelCase(key));
        }, function (el, key, val) {
            // 设置样式
            el.style[camelCase(key)] = val + '';
        });
    },

    // 查询元素的内联样式
    style: function (key) {
        return this[0] ? this[0].style[camelCase(key)] : '';
    },

    // 查询/设置attribute
    // attr('maxlength')
    // attr('maxlength', '12')
    // attr({ maxlength: '12' })
    attr: function (key, value) {
        return valueHandler.call(this, arguments, function (el, key) {
            // 查询属性
            return el.getAttribute(key);
        }, function (el, key, val) {
            // 设置属性
            el.setAttribute(key, val);
        });
    },

    // 检查是否有class
    hasClass: function (cls) {
        var has = false;
        var reg = new RegExp('\\b' + cls + '\\b');

        this.each(function (el) {
            has = has || !!el.className.match(reg);
        });

        return has;
    },

    // 添加class
    addClass: function (cls, type) {
        var reg = new RegExp('\\b' + cls + '\\b');

        // 为所有节点添加或删除class
        return this.each(function (el) {
            var name = el.className;

            if (typeof name !== 'string') return;

            if (type === 'remove') {
                // remove
                if (name.match(reg)) {
                    el.className = name.replace(reg, '');
                }
            } else {
                // add
                if (!name.match(reg)) {
                    el.className += ' ' + cls;
                }
            }
        });
    },

    // 删除class
    removeClass: function (cls) {
        return this.addClass(cls, 'remove');
    },

    // 设置html
    html: function (html) {
        return this.each(function (el) {
            el.innerHTML = html;
        });
    },

    // 显示
    show: function () {
        return this.each(function (el) {
            if (el.style.display === 'none') {
                el.style.display = el.getAttribute('od') || '';
            };
        });
    },

    // 隐藏
    hide: function () {
        return this.each(function (el) {
            if (el.style.display !== 'none') {
                el.setAttribute('od', getComputedStyle(el, 'display'));
                el.style.display = 'none';
            };
        });
    },

    // 切换显示隐藏
    toggle: function () {
        return this.each(function (el) {
            var e = tethys(el);
            e.css('display') === 'none' ? e.show() : e.hide();
        });
    },

    // 追加节点
    append: function (child) {
        var children = tethys(child);

        return this.each(function (el) {
            children.each(function (child, i) {
                el.appendChild(child);
            });
        });
    },

    // 查找
    find: function (selector) {
        var nodes = [];

        this.each(function (el) {
            tethys(selector, el).each(function (node) {
                nodes.push(node);
            });
        });

        return tethys(nodes);
    },

    // 延时
    delay: function (time, fn) {
        setTimeout(fn.bind(this), time);

        return this;
    }
};

// 设置/查询：宽度/高度
['width', 'height'].forEach(function (name) {
    tethys.fn[name] = function (val) {
        // 如果有参数且参数时数值，设置样式，并且单位为px
        if (typeof val === 'number') {
            return this.css(name, val + 'px');
        } else {
            // 否则，返回实际样式的数值
            return getNumber(getComputedStyle(this[0], name));
        }
    };
});

module.exports = tethys;
