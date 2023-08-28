"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
// START //




// Set copyright year automatically
const copyrightSpan = document.querySelector('#copyright-span');
copyrightSpan.textContent = new Date().getFullYear();
console.log(copyrightSpan);

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/logo.svg */ "./src/assets/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/github-logo-white.svg */ "./src/assets/img/github-logo-white.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/support-white.svg */ "./src/assets/img/support-white.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>TO✼DO</title>\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Caveat&display=swap\"\n      rel=\"stylesheet\"\n    />\n  </head>\n  <body>\n    <div class=\"header\">\n      <div class=\"logo\">\n        <img class=\"logo-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"app logo\" />\n        <h1 class=\"logo-text\">TO✼DO</h1>\n      </div>\n      <div class=\"developer\">\n        <p class=\"copyright\">&copy<span id=\"copyright-span\"> 2023</span></p>\n        <!-- <p class=\"para-author\">\n          Created by -->\n        <a\n          class=\"github-link\"\n          href=\"https://github.com/rasmushaislund\"\n          target=\"_blank\"\n          >Rasmus H.\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n            class=\"github-logo\"\n            alt=\"github logo\"\n        /></a>\n        <!-- </p> -->\n      </div>\n      <div class=\"settings\">\n        <ul class=\"settings-list\">\n          <li class=\"settings-item\" id=\"help\">\n            <img\n              class=\"settings-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n              alt=\"help icon\"\n            />Help\n          </li>\n        </ul>\n      </div>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/img/github-logo-white.svg":
/*!**********************************************!*\
  !*** ./src/assets/img/github-logo-white.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/github-logo-white.4c2be9f4828f8c89fdca.svg";

/***/ }),

/***/ "./src/assets/img/logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/logo.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.0cd90d5a5f1562c6d77c.svg";

/***/ }),

/***/ "./src/assets/img/support-white.svg":
/*!******************************************!*\
  !*** ./src/assets/img/support-white.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/support-white.20095ae09ec9b7e21703.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVxQjtBQUNXOztBQUVoQztBQUNBLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDL0RGLGFBQWEsQ0FBQ0csV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQzBHO0FBQzFHLHlDQUF5Qyx1SEFBd0M7QUFDakYseUNBQXlDLGlKQUFxRDtBQUM5Rix5Q0FBeUMseUlBQWlEO0FBQzFGO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUU7QUFDQTtBQUNBLCtEQUFlLElBQUk7Ozs7Ozs7Ozs7QUNYTjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz9lMzIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNUQVJUIC8vXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9pbmRleC5odG1sJztcblxuLy8gU2V0IGNvcHlyaWdodCB5ZWFyIGF1dG9tYXRpY2FsbHlcbmNvbnN0IGNvcHlyaWdodFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29weXJpZ2h0LXNwYW4nKTtcbmNvcHlyaWdodFNwYW4udGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5jb25zb2xlLmxvZyhjb3B5cmlnaHRTcGFuKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9naXRodWItbG9nby13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvc3VwcG9ydC13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDx0aXRsZT5UT+KcvERPPC90aXRsZT5cXG4gICAgPGxpbmtcXG4gICAgICBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFxcXCJcXG4gICAgICByZWw9XFxcInN0eWxlc2hlZXRcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZGlzcGxheT1zd2FwXFxcIlxcbiAgICAgIHJlbD1cXFwic3R5bGVzaGVldFxcXCJcXG4gICAgLz5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nby1pY29uXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcImFwcCBsb2dvXFxcIiAvPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJsb2dvLXRleHRcXFwiPlRP4py8RE88L2gxPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRldmVsb3BlclxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiY29weXJpZ2h0XFxcIj4mY29weTxzcGFuIGlkPVxcXCJjb3B5cmlnaHQtc3BhblxcXCI+IDIwMjM8L3NwYW4+PC9wPlxcbiAgICAgICAgPCEtLSA8cCBjbGFzcz1cXFwicGFyYS1hdXRob3JcXFwiPlxcbiAgICAgICAgICBDcmVhdGVkIGJ5IC0tPlxcbiAgICAgICAgPGFcXG4gICAgICAgICAgY2xhc3M9XFxcImdpdGh1Yi1saW5rXFxcIlxcbiAgICAgICAgICBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmFzbXVzaGFpc2x1bmRcXFwiXFxuICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcbiAgICAgICAgICA+UmFzbXVzIEguXFxuICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJnaXRodWItbG9nb1xcXCJcXG4gICAgICAgICAgICBhbHQ9XFxcImdpdGh1YiBsb2dvXFxcIlxcbiAgICAgICAgLz48L2E+XFxuICAgICAgICA8IS0tIDwvcD4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzZXR0aW5ncy1saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzZXR0aW5ncy1pdGVtXFxcIiBpZD1cXFwiaGVscFxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNldHRpbmdzLWljb25cXFwiXFxuICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJoZWxwIGljb25cXFwiXFxuICAgICAgICAgICAgLz5IZWxwXFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJodG1sIiwiY29weXJpZ2h0U3BhbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=