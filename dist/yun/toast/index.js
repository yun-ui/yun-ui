!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}({0:function(t,e,o){t.exports=o(30)},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{UIName:"yun"}}}},2:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=o(1),s=n(r),i={UIName:s.default};t.exports=i},11:function(t,e){},30:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=o(58),s=n(r);t.exports=s.default},44:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2);e.default={name:"yun-toast",mixins:[n.UIName],props:{icon:String,bottom:Boolean,content:String},methods:{}}},58:function(t,e,o){var n,r;o(11),n=o(44);var s=o(67);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=n},67:function(module,exports){module.exports={render:function(){with(this)return _h("div",{class:UIName+"-toast"},[_h("div",{class:[UIName+"-toast-container",{"is-loading-bottom":bottom}]},[icon||$slots.icon?_h("div",{class:UIName+"-toast-icon"},[_t("icon")]):_e()," ",content||$slots.content?_h("div",{class:UIName+"-toast-content",domProps:{textContent:_s(content)}}):_e()])])},staticRenderFns:[]}}})});