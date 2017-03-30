function extend () {
    var args = arguments;
    var deep = false;
    var dest;
    if (typeof args[0] === 'boolean') {
        deep = Array.prototype.shift.call(args);
    };
    dest = Array.prototype.shift.call(args);
    Array.prototype.forEach.call(args, function (src) {
        if (typeof src === 'object') {
            Object.keys(src).forEach(function (key) {
                if (deep && typeof src[key] === 'object' && typeof dest[key] === 'object') {
                    extend(true, dest[key], src[key]);
                } else if (typeof src[key] !== 'undefined') {
                    dest[key] = src[key];
                };
            });
        };
    });
    return dest;
}

module.exports = {
    extend: extend
}
