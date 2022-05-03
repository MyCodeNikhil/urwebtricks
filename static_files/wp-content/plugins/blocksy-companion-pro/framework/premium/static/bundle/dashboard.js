!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.blocksyOptions},function(e,t){e.exports=window.ctEvents},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(0),c=n(1),i=(n(4),n(2));function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(){var e=s(Object(a.useState)(ctDashboardLocalizations.plugin_data.has_beta_consent),2),t=e[0],n=e[1],r=s(Object(a.useState)(!1),2),o=r[0],l=r[1],f=s(Object(a.useState)(!1),2),b=f[0],p=f[1],d=function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return n((function(e){return!e})),l(!0),(r=new FormData).append("action","blocksy_toggle_has_beta_consent"),e.next=8,fetch(ctDashboardLocalizations.ajax_url,{method:"POST",body:r});case 8:e.sent,window.ctDashboardLocalizations.plugin_data.has_beta_consent=!t,l(!1);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(a.createElement)("div",{className:"ct-beta-consent"},Object(a.createElement)("h2",{onClick:function(){t?d():p(!0)}},Object(c.__)("Receive βeta Updates","blocksy-companion"),Object(a.createElement)(i.Switch,{value:t?"yes":"no",onChange:function(){}})),Object(a.createElement)("p",null,Object(c.__)("Receive beta updates and help us test the new features and improve them by submitting feedback. Please note, installing beta versions on production websites is not recommended, test them on staging or localhost environments.","blocksy-companion")),Object(a.createElement)(i.Overlay,{items:b,className:"ct-admin-modal ct-beta-updates-consent",onDismiss:function(){return p(!1)},render:function(){return Object(a.createElement)("div",{className:"ct-modal-content"},Object(a.createElement)("h2",{className:"ct-modal-title"},Object(c.__)("Are you sure?","blocksy-companion")),Object(a.createElement)("p",null,Object(c.__)("Installing beta updates on your production site can give unexpected results.","blocksy-companion")),Object(a.createElement)("p",null,Object(c.__)("Even having your website completely broken is not excluded. Please proceed with caution.","blocksy-companion")),Object(a.createElement)("div",{className:"ct-modal-actions has-divider","data-buttons":"2"},Object(a.createElement)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),p(!1)},className:"button"},"Cancel"),Object(a.createElement)("button",{className:"button button-primary",onClick:function(e){e.preventDefault(),d(),p(!1)}},"Confirm")))}}))};o.a.on("ct:dashboard:home:after",(function(e){ctDashboardLocalizations.plugin_data.hide_beta_updates||(e.content=Object(a.createElement)(f,null))}))}]);