var frontend_blocks_deprecated_v2__premium_only;(()=>{var t,e={3165:(t,e,r)=>{"use strict";r.r(e);var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o&&o,n="URLSearchParams"in o,s="Symbol"in o&&"iterator"in Symbol,i="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in o,u="ArrayBuffer"in o;if(u)var d=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&d.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s&&(e[Symbol.iterator]=function(){return e}),e}function y(t){this.map={},t instanceof y?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():u&&i&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(m)}),this.text=function(){var t,e,r,o=p(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,r=b(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}y.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},y.prototype.delete=function(t){delete this.map[c(t)]},y.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},y.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},y.prototype.set=function(t,e){this.map[c(t)]=f(e)},y.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},y.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),l(t)},y.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},y.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),l(t)},s&&(y.prototype[Symbol.iterator]=y.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new y(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new y(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),w.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new y(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var B,O=o.DOMException;try{new O}catch(t){(O=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function x(t,e){return new Promise((function(r,n){var s=new v(t,e);if(s.signal&&s.signal.aborted)return n(new O("Aborted","AbortError"));var a=new XMLHttpRequest;function d(){a.abort()}a.onload=function(){var t,e,o={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new y,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;setTimeout((function(){r(new A(n,o))}),0)},a.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){n(new O("Aborted","AbortError"))}),0)},a.open(s.method,function(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}(s.url),!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&(i?a.responseType="blob":u&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof y?s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,f(e.headers[t]))})),s.signal&&(s.signal.addEventListener("abort",d),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",d)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}x.polyfill=!0,o.fetch||(o.fetch=x,o.Headers=y,o.Request=v,o.Response=A),B=()=>{document.body.addEventListener("click",(t=>{const e=t.target.closest(".ugb-blog-posts__load-more-button");if(!e)return;const r=e.closest("[data-id]");if(!r)return;const o=r.getAttribute("data-id"),n=r.getAttribute("data-load-items"),s=(parseInt(e.getAttribute("data-page"),10)||1)+1;let i=0;e.classList.add("ugb-blog-posts--busy"),fetch(`${window.stackable.restUrl}stackable/v2/blog_posts_pagination?id=${o}&page=${s}&num=${n}`).then((t=>(i=parseInt(t.headers.get("X-UGB-Total-Posts"),10),t.json()))).then((t=>{const r=e.closest(".ugb-blog-posts").querySelector(".ugb-blog-posts__item").parentNode,o=document.createElement("div");for(o.innerHTML=t;o.querySelector(".ugb-blog-posts__item");){const t=o.querySelector(".ugb-blog-posts__item");t.classList.add("ugb-blog-posts--hide"),r.insertBefore(t,r.querySelector(".ugb-blog-posts__item:last-of-type").nextSibling),setTimeout((()=>{t.classList.remove("ugb-blog-posts--hide")}),10)}e.setAttribute("data-page",s),r.querySelectorAll(".ugb-blog-posts__item").length===i&&r.querySelector(".ugb-button-container").remove()})).finally((()=>{e&&e.classList.remove("ugb-blog-posts--busy")})),t.preventDefault()}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",B):B())},7096:(t,e,r)=>{var o={"./blog-posts/frontend.js":3165};function n(t){var e=s(t);return r(e)}function s(t){if(!r.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id=7096}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(t=o(7096)).keys().forEach(t),frontend_blocks_deprecated_v2__premium_only={}})();