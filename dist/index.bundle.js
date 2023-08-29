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
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/circle-outline.svg */ "./src/assets/img/circle-outline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/calender.svg */ "./src/assets/img/calender.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/star-outline.svg */ "./src/assets/img/star-outline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/bullet-list.svg */ "./src/assets/img/bullet-list.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/plus-thick.svg */ "./src/assets/img/plus-thick.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/settings.svg */ "./src/assets/img/settings.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/support.svg */ "./src/assets/img/support.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/dots-horizontal.svg */ "./src/assets/img/dots-horizontal.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>TO✼DO</title>\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Caveat&display=swap\"\n      rel=\"stylesheet\"\n    />\n  </head>\n  <body>\n    <div class=\"header\">\n      <div class=\"logo\">\n        <img class=\"logo-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"app logo\" />\n        <h1 class=\"logo-text\">TO✼DO</h1>\n      </div>\n      <div class=\"developer\">\n        <p class=\"copyright\">&copy<span id=\"copyright-span\"> 2023</span></p>\n        <a\n          class=\"github-link\"\n          href=\"https://github.com/rasmushaislund\"\n          target=\"_blank\"\n          >Rasmus H.\n          <img\n            src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n            class=\"github-logo\"\n            alt=\"github logo\"\n        /></a>\n      </div>\n    </div>\n    <div class=\"main\">\n      <div class=\"sidebar\">\n        <div class=\"info\">\n          <p class=\"day\">Monday 3th June</p>\n          <div class=\"weather\">\n            <img\n              class=\"sidebar-icon\"\n              id=\"weather-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n              alt=\"weather icon\"\n            />\n            <div class=\"temperature\">\n              <p class=\"temperature-value\">23</p>\n              <p class=\"temperature-unit\"><sup> &deg</sup>C</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"sidebar-top\">\n          <div class=\"sidebar-item\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n              alt=\"calender\"\n            />\n            <p class=\"standard-text\">Today</p>\n            <p class=\"standard-text task-count\">3</p>\n          </div>\n          <div class=\"sidebar-item\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n              alt=\"important\"\n            />\n            <p class=\"standard-text\">Important</p>\n            <p class=\"standard-text task-count\">1</p>\n          </div>\n          <div class=\"separation\"></div>\n          <div class=\"sidebar-item\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n              alt=\"bullet list\"\n            />\n            <p class=\"standard-text\">Projects</p>\n            <p class=\"standard-text task-count\">6</p>\n          </div>\n          <div class=\"sidebar-item\" id=\"sidebar-item-add\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n              alt=\"plus operator\"\n            />\n            <input\n              type=\"text\"\n              id=\"add-project\"\n              name=\"add-project\"\n              maxlength=\"150\"\n              placeholder=\"Add new project\"\n            />\n          </div>\n        </div>\n        <div class=\"sidebar-settings\">\n          <div class=\"sidebar-item\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\n              alt=\"settings\"\n            />\n            <p class=\"standard-text\">Settings</p>\n          </div>\n          <div class=\"sidebar-item\">\n            <img\n              class=\"sidebar-icon\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n              alt=\"help\"\n            />\n            <p class=\"standard-text\">Help</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"task-container\">\n        <div class=\"task-header\">\n          <img\n            class=\"task-header-icon\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n            alt=\"icon for project header in task section\"\n          />\n          <h2 class=\"header-project-name\">Projects</h2>\n          <img\n            class=\"task-header-icon hoverable-icon\" \n            id=\"three-dots-icon\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\n            alt=\"dots icon for expanding controls\"\n          />\n      </div>\n    </div>\n  </body>\n</html>\n";
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

/***/ "./src/assets/img/bullet-list.svg":
/*!****************************************!*\
  !*** ./src/assets/img/bullet-list.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/bullet-list.365f3e7f182c9f913994.svg";

/***/ }),

/***/ "./src/assets/img/calender.svg":
/*!*************************************!*\
  !*** ./src/assets/img/calender.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/calender.3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/assets/img/circle-outline.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/circle-outline.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/circle-outline.e3b6ef0fc8b1ecd5d1a9.svg";

/***/ }),

/***/ "./src/assets/img/dots-horizontal.svg":
/*!********************************************!*\
  !*** ./src/assets/img/dots-horizontal.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/dots-horizontal.469afb7a3c40cc9d6606.svg";

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

/***/ "./src/assets/img/plus-thick.svg":
/*!***************************************!*\
  !*** ./src/assets/img/plus-thick.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/plus-thick.469e7f772cffd2e91e89.svg";

/***/ }),

/***/ "./src/assets/img/settings.svg":
/*!*************************************!*\
  !*** ./src/assets/img/settings.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/settings.57d3ca9af2612ee72754.svg";

/***/ }),

/***/ "./src/assets/img/star-outline.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/star-outline.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/star-outline.c2e6e6dd118d33c26922.svg";

/***/ }),

/***/ "./src/assets/img/support.svg":
/*!************************************!*\
  !*** ./src/assets/img/support.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/support.b34445be5676b112619b.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVxQjtBQUNXOztBQUVoQztBQUNBLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDL0RGLGFBQWEsQ0FBQ0csV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQzBHO0FBQzFHLHlDQUF5Qyx1SEFBd0M7QUFDakYseUNBQXlDLGlKQUFxRDtBQUM5Rix5Q0FBeUMsMklBQWtEO0FBQzNGLHlDQUF5QywrSEFBNEM7QUFDckYseUNBQXlDLHVJQUFnRDtBQUN6Rix5Q0FBeUMscUlBQStDO0FBQ3hGLHlDQUF5QyxtSUFBOEM7QUFDdkYseUNBQXlDLCtIQUE0QztBQUNyRix5Q0FBeUMsNkhBQTJDO0FBQ3BGLHlDQUF5Qyw2SUFBbUQ7QUFDNUY7QUFDQSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFO0FBQ0E7QUFDQSwrREFBZSxJQUFJOzs7Ozs7Ozs7O0FDekJOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzP2UzMjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1RBUlQgLy9cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG4vLyBTZXQgY29weXJpZ2h0IHllYXIgYXV0b21hdGljYWxseVxuY29uc3QgY29weXJpZ2h0U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3B5cmlnaHQtc3BhbicpO1xuY29weXJpZ2h0U3Bhbi50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbmNvbnNvbGUubG9nKGNvcHlyaWdodFNwYW4pO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2dpdGh1Yi1sb2dvLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9jaXJjbGUtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvY2FsZW5kZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL3N0YXItb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvYnVsbGV0LWxpc3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL3BsdXMtdGhpY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL3NldHRpbmdzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9zdXBwb3J0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9kb3RzLWhvcml6b250YWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOV9fXyk7XG52YXIgY29kZSA9IFwiPCFkb2N0eXBlIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlRP4py8RE88L3RpdGxlPlxcbiAgICA8bGlua1xcbiAgICAgIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwXFxcIlxcbiAgICAgIHJlbD1cXFwic3R5bGVzaGVldFxcXCJcXG4gICAgLz5cXG4gICAgPGxpbmtcXG4gICAgICBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhdmVhdCZkaXNwbGF5PXN3YXBcXFwiXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcbiAgICAvPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvLWljb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiYXBwIGxvZ29cXFwiIC8+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+VE/inLxETzwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGV2ZWxvcGVyXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJjb3B5cmlnaHRcXFwiPiZjb3B5PHNwYW4gaWQ9XFxcImNvcHlyaWdodC1zcGFuXFxcIj4gMjAyMzwvc3Bhbj48L3A+XFxuICAgICAgICA8YVxcbiAgICAgICAgICBjbGFzcz1cXFwiZ2l0aHViLWxpbmtcXFwiXFxuICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yYXNtdXNoYWlzbHVuZFxcXCJcXG4gICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFxuICAgICAgICAgID5SYXNtdXMgSC5cXG4gICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImdpdGh1Yi1sb2dvXFxcIlxcbiAgICAgICAgICAgIGFsdD1cXFwiZ2l0aHViIGxvZ29cXFwiXFxuICAgICAgICAvPjwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJkYXlcXFwiPk1vbmRheSAzdGggSnVuZTwvcD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNpZGViYXItaWNvblxcXCJcXG4gICAgICAgICAgICAgIGlkPVxcXCJ3ZWF0aGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJ3ZWF0aGVyIGljb25cXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZW1wZXJhdHVyZVxcXCI+XFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGVtcGVyYXR1cmUtdmFsdWVcXFwiPjIzPC9wPlxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRlbXBlcmF0dXJlLXVuaXRcXFwiPjxzdXA+ICZkZWc8L3N1cD5DPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci10b3BcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaWRlYmFyLWljb25cXFwiXFxuICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJjYWxlbmRlclxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGFuZGFyZC10ZXh0XFxcIj5Ub2RheTwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhbmRhcmQtdGV4dCB0YXNrLWNvdW50XFxcIj4zPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWJhci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiaW1wb3J0YW50XFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YW5kYXJkLXRleHRcXFwiPkltcG9ydGFudDwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhbmRhcmQtdGV4dCB0YXNrLWNvdW50XFxcIj4xPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VwYXJhdGlvblxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNpZGViYXItaWNvblxcXCJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcImJ1bGxldCBsaXN0XFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YW5kYXJkLXRleHRcXFwiPlByb2plY3RzPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGFuZGFyZC10ZXh0IHRhc2stY291bnRcXFwiPjY8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLWl0ZW1cXFwiIGlkPVxcXCJzaWRlYmFyLWl0ZW0tYWRkXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWJhci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwicGx1cyBvcGVyYXRvclxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIGlkPVxcXCJhZGQtcHJvamVjdFxcXCJcXG4gICAgICAgICAgICAgIG5hbWU9XFxcImFkZC1wcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgbWF4bGVuZ3RoPVxcXCIxNTBcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQWRkIG5ldyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLXNldHRpbmdzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWJhci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwic2V0dGluZ3NcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhbmRhcmQtdGV4dFxcXCI+U2V0dGluZ3M8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlYmFyLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaWRlYmFyLWljb25cXFwiXFxuICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJoZWxwXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YW5kYXJkLXRleHRcXFwiPkhlbHA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFzay1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFzay1oZWFkZXJcXFwiPlxcbiAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRhc2staGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICBhbHQ9XFxcImljb24gZm9yIHByb2plY3QgaGVhZGVyIGluIHRhc2sgc2VjdGlvblxcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJoZWFkZXItcHJvamVjdC1uYW1lXFxcIj5Qcm9qZWN0czwvaDI+XFxuICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGFzay1oZWFkZXItaWNvbiBob3ZlcmFibGUtaWNvblxcXCIgXFxuICAgICAgICAgICAgaWQ9XFxcInRocmVlLWRvdHMtaWNvblxcXCJcXG4gICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgIGFsdD1cXFwiZG90cyBpY29uIGZvciBleHBhbmRpbmcgY29udHJvbHNcXFwiXFxuICAgICAgICAgIC8+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImh0bWwiLCJjb3B5cmlnaHRTcGFuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==