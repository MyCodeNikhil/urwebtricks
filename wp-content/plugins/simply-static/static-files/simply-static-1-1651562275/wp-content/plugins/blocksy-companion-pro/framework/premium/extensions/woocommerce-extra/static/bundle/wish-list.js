!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=window.ctFrontend},function(t,e,n){"use strict";n.r(e);var o=n(0);function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s=function(t){var e=t.operation,n=t.productId,o=t.el,i=t.cb,s=void 0===i?function(){}:i,c=n||Array.from(o.classList).find((function(t){return 0===t.indexOf("post-")})).split("-")[1],a=ct_localizations.blc_ext_wish_list.list,l=a;"add"===e&&(l=[].concat(r(a),[parseFloat(c)])),"remove"===e&&(l=a.filter((function(t){return parseFloat(t)!==parseFloat(c)}))),"yes"===window.ct_localizations.blc_ext_wish_list.user_logged_in?fetch("".concat(ct_localizations.ajax_url,"?action=blc_ext_wish_list_sync_likes"),{method:"POST",body:JSON.stringify(l),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var e=t.success;t.data;e&&s()})):(!function(t,e){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365;if(o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3),n="; expires="+r.toGMTString()}else n="";document.cookie=t+"="+e+n+"; path=/"}("blc_products_wish_list",JSON.stringify(l)),setTimeout((function(){s()}))),window.ct_localizations.blc_ext_wish_list.list=l,Array.from(document.querySelectorAll('.ct-header-wishlist, [data-id="wishlist"]')).map((function(t){t.classList.remove("ct-added"),t.classList.add("ct-adding"),t.removeAttribute("style"),l.length>0&&t.style.setProperty("--counter","'".concat(l.length,"'")),setTimeout((function(){t.classList.remove("ct-adding"),t.classList.add("ct-added")}))}))},c=!1;Object(o.registerDynamicChunk)("blocksy_ext_woo_extra_wish_list",{mount:function(t,e){var n=e.event;if(!n){if(c)return;return c=!0,void fetch("".concat(ct_localizations.ajax_url,"?action=blc_ext_wish_list_get_all_likes"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){t.success;var e=t.data.likes;r(document.querySelectorAll('[class*="ct-wishlist-button"], .ct-wishlist-remove, .wishlist-product-remove > .remove, .product-mobile-actions > [href*="wishlist-remove"]')).map((function(t){t.classList.remove("active"),e.indexOf(parseFloat(t.getAttribute("href").replace("#wishlist-add-","")))>-1&&t.classList.add("active")}))}))}n.preventDefault(),n.stopPropagation(),s({productId:t.dataset.id,el:t.closest(".type-product")||t.closest("li"),operation:t.classList.contains("active")||t.classList.contains("remove")?"remove":"add",cb:function(){t.closest(".wishlist-table")&&1===t.closest("tbody").children.length&&location.reload()}}),t.classList.contains("remove")||t.classList.toggle("active"),t.closest(".wishlist-table")&&(1===t.closest("tbody").children.length||t.closest("tr").remove())}})}]);