parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var t=document.querySelector(".to-top");window.addEventListener("scroll",function(){window.scrollY>50?t.classList.add("to-top--show"):t.classList.remove("to-top--show")});var e=document.querySelector(".gallery__img-collection"),o=document.querySelectorAll(".gallery__img"),r=document.querySelectorAll(".paginator__item");function l(t){var o=t.getBoundingClientRect(),r=e.getBoundingClientRect(),l=Math.min(o.right,r.right)-Math.max(o.left,r.left);if(l<=0)return 0;var n=o.width;return Math.min(100,l/n*100)}function n(){for(var t=0;t<o.length;t++){var e=l(o[t]),n=100-e;r[t].style.setProperty("--color","".concat(n,"%")),r[t].style.setProperty("--active-color","".concat(e,"%"))}}e.addEventListener("scroll",n);
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.5d6d9621.js.map