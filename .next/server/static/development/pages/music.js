module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/g-clef.png":
/*!*******************************!*\
  !*** ./assets/img/g-clef.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAB0CAYAAAA8aZQfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwNDcwRjY4MUE2MDExRTk4RDc1QzdEMUQ3QkU3RjYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwNDcwRjY5MUE2MDExRTk4RDc1QzdEMUQ3QkU3RjYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTA0NzBGNjYxQTYwMTFFOThENzVDN0QxRDdCRTdGNjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTA0NzBGNjcxQTYwMTFFOThENzVDN0QxRDdCRTdGNjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6uieCMAAAInElEQVR42uxdaWxVRRSeB22htWwSNpGq7KCigghC3BHFCkgAhRhiRFERjf5AVMIioMYgiAsGlEBCTFQgEdwSicYN2bciyiooQsWyr2oF+pyTd65vOJ3ttb1r7yQnvfe+uct8d+bMOd85c5tIJpMsLulSI4YgBiQGJAYkBiQGxLWSVZmTE4mEG89UwGUIl9ZctnP5kEtxJheolCkBJ1dUXCituHzK5Sw8Gv5dxOUiz9oUIEC6cjmAQFDZxaVldQKkBZd9CjAc+YFLdnUBZIkBDEeeqQ6ADLIEI4m9qIGbgPg97SZs3zqW5lzujrIdUsjlOs3vZVz+JscGRxmQRxTH/+EyC2cesEsmCb91txk2YbRDLuPyl0RP7Jb0mlpcdgh1ekRRh/TikkuOQaNv4rKGHC/lslzY7xjFIXMn2T+JJvteRf1dpHdFCpDaXDqTY+O4bNScc1LYbhI1QFqgOGULl9mGc3KE7fyoAXIJl5rC/jtc/jWc09iL5/YLkKZkKHxkcU5rMi1HChDRjliFJrlpuHQS9o9GDRBRHyy3qN+JuP/FUQPknLD9k0X9vmT/l6gBclrY/t1QN5v4L0k04CIFyBGhcccMdW/n0kHY30uMtEgAckAYOmcMdZ8g++skHnDoAdmPrn0W0zP/t3LpQ44tjaL7Dz3kEG7X1dQbT/bBePsmioCc4LLH4JcAV3IzObaCy84oAgLlZ8GMpwX4jhmS4/Pdfig/AdmAf9uR421YKlqXR47D7LI4yoBswr9XEX/lC+IJO2Uel+OuP5WPFGJTnD4PIT/SlqXoQ1n44SDLIJwZ5rjMBmzwSC6/MnU8ZpxnL9lnQGazdFBbBcaOTAmhMAeqHBO+pqbOBC6nPHsiH3vIKGYOXS70vE0+ATLRAow/uVxcHQB5ldkFtgf70us9BuRtSzBm+KYGPARktiUY37NU6DLSgLxpCcYehZUaKUBeYvYJMQP8njndtkOA7RqbQf08n+0iVwEBpvwNi3pA+mzG7ev9BsStIdOGqVMsqbzIUikQTqYhi5oOycGG2YDxHp7THHsKROQujBogky3B+Jyl804h+W4LHu8ZJaUKqVDPWdQDW2OIEIIAIDYK14iMUp3KzNnGRVwGsvMTYKCsxr/doqJUB1sMk20ah62nwH9khV2HQE9bZwADIvbtNe1oiEq1jJ2fC+IpIFlV1NH6celiIIL6YQ9RlcNoj9zA5WGWCoI3QHJoF+qY4rAMmc80PQOyfXobHqMO8qq6FRGnkJG/x6T7/B4yBfiwqoYMNYBxL5ffMvB3HI+4U1ABGa558Fc0QORkQAnIBLKgHwgaINkYZZM98HoNrwFxmI8rAYYozwYJEAhD7lQ8aH9N7/igisBw5MmgANIflSZ9wCJNaOHpKgYjiVP1XUEw3VsphgWED84pvODJmuudEEz4gxiTeRcBPqc5D3yht7jU83vanap4Yyp/ZJbmLc/B+G0BRvIAnMZCg2HtzALsDdo1eX4OGVkDDzH5Ap+GCo4EGvgQsXq34m+3SK4zAI04GSCQ4lnXzyEj68YlTJ5ZCBZoIwVdMFfYLxMYtK6S+pAjcofiHpcrzvHM25WlWDtGmowaoAXSH6ZJjjt6pLvivuA3Pab47Wo/AZEl3apmlwLJsfcVgey1QuNyFNdbgCSTzX08A2QrjmexNFBwIjKgvlZcF/LPINsZVk7plrjPlRzL9xOQLax8rnoTdv7aFqdQT/UMS2ci0rKfpdO3r9HcH7ISj1voNc8AOYIeqFguQOXGFIyYU8Cg02UkrzfoEUeB75PQCL5SiEtY+fTs3orhUUKGkC5RZrVFD2ESKnK334AA6fMlOdYfHTj65uYJ+3mGkIOTttneYIHmkmG4KQgE0W0SI2mggggqEurcp3m0eoIh101DLP0hXA+m67ygxGUWEkBWoMlNSzuBGTMl8i/DeqMUv3cm95wUpEBVS4lJPVLRkLbYtZOGOM7rJMJHy2jhXqUOiR2kyN39BJCjGqY9X2jwREWdoYKPIuttq4R7LQhqKHOKhDmrr+kFkNq9CM+j6RAdhLd/KfmtULgHTN9XBhUQKDRjCNa41DXoiytY+ZURwLU4Gc59iTW8Tbj+hKAFqmTlZQLKRkOgSlUc7vUFYWZZKlz3KxrpC3JK1TA0nJyHP4YkTu0MABmL5y5GC/hHQlU2CmIoU1faoeEm9hZYd/s8s/s2WaGgJ04L11jJFCskKtOmRGUykjP49F8CDbXxJMBUim+8CNn7EvRxQLk2R6XaFafp/9vLUvmuY1S+UJg+/ZeNZv0S9FIzZddX2jBiYeghsgIUwY0slWjXAYmd+qggy1D3FOO03RPrzaQxmLD3ENOwykUfJp84nk9hD1nrdpuC9D1VR3EeR1qxjHCojoJu4uZDhOUDs9vQDahDFGy1BeQw8rdQro0BSZUiC0qxWgGyQQhNZMWApINXLSWeb5WVLI8bBffrgm+5JoYxVjG7r07twPBEMzzfnc/ueGiHwAcO1kisz62s/DeGVOU7ll4w4E6bPAKkD/otOrP8QYvrzKfsWBgNMzDRIfcjx1BvJpJEpumXMXkWQWiU6nD0XE0FPNzHDXWcMGXtMAPSK4O6pqUhdfDv2TADkonv0ZDp1905KzaPhBmQkxnWLdVwKc7XaLaHGZCiDOquZ+p0BggztMLtFWEG5JMM6s7R/OZ8CwBoxmXukRDu2yE1FAYZlSmaazRDIKDedFfb5JFhVqgBApj00YbznVTwAzZTeFg+hjBNAAGoQIjUj2DmJLnXhPMGud7rPeZU57H0V6d062ggLQtyUb9l6eTeEV6oAT9Y9zGoL3JwCADPAez6GTS8YJFiR8E8hyn2UXTsrAEJg7crFojxzmLqFG0gmyFAPoxV4AMJYY3L1EI6sAfqkVwEAjiPzWhrlFT0JVe4TfE/Dw0vhRgDEgMSAxIDEgMStvKfAAMAfom6NmMV3ogAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/img/whole-note.png":
/*!***********************************!*\
  !*** ./assets/img/whole-note.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAwCAYAAACooNxlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCNzhGMTI1MUE1RjExRTlCNUJEOEYxRkU4QUE4OEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCNzhGMTI2MUE1RjExRTlCNUJEOEYxRkU4QUE4OEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REI3OEYxMjMxQTVGMTFFOUI1QkQ4RjFGRThBQTg4QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REI3OEYxMjQxQTVGMTFFOUI1QkQ4RjFGRThBQTg4QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RnjHeAAAEB0lEQVR42tSbSUhWURTHn1+aaaU2aU7VQmmSBF3YIAW1CNpI0UBRYShCE1GbiIKgVknQJlpUCEFRVBQthCDLcBEhWEYTTYQ5lJapjTba/9T5QMNP3/C/tzzwA114zuX/zjv33HOfUY59iwIpIBWMAvEgDoTAd/ARdIHXoAV8s704kzYZzAW5YBaYDtJBjMu//6miPAb3QB24qb8PCYsFReAYeAZ6DCEinQArNcv+O5uvC+w0KEIkPoEzYDEj44M4iAbrwDZ9JQaz96AaPNSfE0AWmKc1hWFPwCFQAb7YrDtrNLibJ9gMyrRwRvK3AJwGP0hZE445zLQYOVrU3C7sMhjrwb8U3Sri61QPZpsQQpTeC756WEwlGO4z3mbwmSSKZF25h51tUEsGVz0u4jlIChi3ALQSs6UWZAQVQ1K40UfwItLDkKLbRBTlJcjzu5g87Ra9Bq0jv67ZoI0oSpc2i55sKmj3GbDUQA2bQ6wpPdov5boNPiFAlykFbLyhHW4juaFrdNv/VAYIcsfwtn+BLErVYM1pacAAFYYFmQg6yKJsiRQsEbwN6Hy3hU55K1mQzkiv+X6C8xILgsTo8Z8pyoG/g4wgnVRXWTpPFZMFka14pKNTKkcbqcQhMHAK2yndJVgmJ+9lvQVZQXIcZ0kQGSseJ/vs0123kFJvp8WhVAZxXNCj3fDvDEnTgS/DMi0K0qSjCJZJQ5oa0qEvy2ZYHl1eJPubJIKMITrMtVhYxa6R/SWFAgxx+jOZjs20KEi9zmdZ1hPSPZhpiywKIvc2d4n+OkSQF+RFLrVcR+4TfTWEBWFmSSFx13JjzSQ/Mk1rC+keXENcoAykN1gUpJXk53rvTvUSeZFyJxJtSZBu4qylTy//gXxgWmtJkPWEtcrsOLZ3hrwzcDbYYylLGJfdh51+rj5TdE9nZskmC4LsI2RHQiTnO8iCtDu8i+xIdjLgGosH2yFqyKKcNyzIowBrc3UWSiOOA8KUGRIjXbtVP2uSMaTr69Y8LbQsQeSSycQtvN+Bs/QuWX46TqYovhYxgMmp+oHPdeT4DZoPXjnc2zKWKKt9xJcbyWzGqK6WnCkFhOlWs8e4V8A4VnrKXUg5cYbZre+/H5NBdrWHWNJw7erVhFJNnuxtYrZUexwopeghzK3/GhsDK+lVShx/H9JE+mLgnA6WQgO055JRbr8Tkd5kud9K7deGa5e3HUwjiS2d7Q0tfnKMGK1PuNBxd+dzCxwEZ1Xof2Ii6kLnz20a+8TsBvka4CihUBuxeB0hVugkzpQIT8ERsMThDsmNXxlM0Q41X1NfPtXKdNx/Iik7RIPWBBkmhz/+bzGZ7rZNCmeykqAFMyyQfAcr/x7Sqf3KG80Ia/ZLgAEAPLtBaM5+FyQAAAAASUVORK5CYII="

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Styles */ "./components/Styles.js");
var _jsxFileName = "D:\\projects\\henlit.se\\components\\Header.js";



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-13fiemu-0"
})(["color:", ";background-color:", ";"], _components_Styles__WEBPACK_IMPORTED_MODULE_2__["Colors"].white, _components_Styles__WEBPACK_IMPORTED_MODULE_2__["Colors"].blue);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Content",
  componentId: "sc-13fiemu-1"
})(["margin:auto;max-width:1280px;font-size:21px;padding:20px;"]);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\projects\\henlit.se\\components\\Layout.js";



var Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Layout__Main",
  componentId: "bk4rf0-0"
})(["margin:auto;max-width:1280px;padding:20px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children));
});

/***/ }),

/***/ "./components/Styles.js":
/*!******************************!*\
  !*** ./components/Styles.js ***!
  \******************************/
/*! exports provided: Colors, Wrapper, Content, SideMenu, ListItem, Table, Td, Th, Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return SideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\projects\\henlit.se\\components\\Styles.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* Colors */

var Colors = {
  white: "#fff",
  black: "#000",
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  blue: "#2196f3",
  green: "#4caf50",
  yellow: "#ffeb3b",
  orange: "#ff9800",
  brown: "#795548",
  grey: "#9e9e9e",
  blueGrey: "#607d8b"
};
/* Layout */

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Styles__Wrapper",
  componentId: "wfeial-0"
})(["display:flex;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Styles__Content",
  componentId: "wfeial-1"
})(["width:100%;background-color:", ";padding:20px;border-radius:4px;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);"], Colors.white);
var SideMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Styles__SideMenu",
  componentId: "wfeial-2"
})(["background-color:", ";padding:20px;width:35%;margin-right:40px;border-radius:4px;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);"], Colors.white);
/* Elements */

var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Styles__ListItem",
  componentId: "wfeial-3"
})(["display:", ";", ""], function (props) {
  return props.direction === "row" && "inline-block" || !props.direction || props.direction === "column" && "block";
}, function (props) {
  return props.direction === "row" ? "margin-right: 30px;" : "margin-bottom: 10px;";
});
var Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "Styles__Table",
  componentId: "wfeial-4"
})(["width:100%;"]);
var Td = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td.withConfig({
  displayName: "Styles__Td",
  componentId: "wfeial-5"
})(["text-align:center;padding:10px;"]);
var Th = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.th.withConfig({
  displayName: "Styles__Th",
  componentId: "wfeial-6"
})(["", " ", ""], function (props) {
  return props.quality && "color: ".concat(Colors.white, ";");
}, function (props) {
  return props.quality === "Major" && "background-color: ".concat(Colors.green, ";") || props.quality === "Minor" && "background-color: ".concat(Colors.blue, ";") || props.quality === "Diminished" && "background-color: ".concat(Colors.orange, ";");
});
/* Forms */

var CheckboxLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "Styles__CheckboxLabel",
  componentId: "wfeial-7"
})(["align-items:center;user-select:none;display:inline-block;display:flex;&::before{font-family:FontAwesome;color:", ";content:", ";display:inline-block;height:16px;width:16px;border:1px solid #ccc;border-radius:4px;margin-right:", ";background-color:#fff;margin-top:-1px;", ";}"], function (props) {
  return props.disabled ? Colors.grey : Colors.blue;
}, function (props) {
  return props.checked ? "'\f00c'" : "''";
}, function (props) {
  return props.label ? "10px" : "0px";
}, function (props) {
  return props.disabled ? "background-color: #ecf0f1" : "cursor: pointer";
});
var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        style: {
          display: "none"
        },
        onChange: function onChange(e) {
          _this.props.onChange(e);
        },
        id: this.props.id,
        type: "checkbox",
        disabled: this.props.disabled,
        defaultChecked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckboxLabel, {
        type: "checkbox",
        title: this.props.disabled ? "Disabled" : "",
        htmlFor: this.props.id,
        checked: this.props.checked,
        disabled: this.props.disabled,
        label: this.props.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.props.label));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./components/music/Filters.js":
/*!*************************************!*\
  !*** ./components/music/Filters.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles */ "./components/Styles.js");
var _jsxFileName = "D:\\projects\\henlit.se\\components\\music\\Filters.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "Filters__Label",
  componentId: "sc-1ktafxn-0"
})(["margin-top:0;margin-bottom:5px;"]);
var optionsMajor = [{
  value: "c",
  label: "C"
}, {
  value: "g",
  label: "G"
}, {
  value: "d",
  label: "D"
}, {
  value: "a",
  label: "A"
}, {
  value: "e",
  label: "E"
}, {
  value: "b",
  label: "B"
}, {
  value: "cb",
  label: "C♭"
}, {
  value: "f#",
  label: "F♯"
}, {
  value: "gb",
  label: "G♭"
}, {
  value: "c#",
  label: "C♯"
}, {
  value: "db",
  label: "D♭"
}, {
  value: "ab",
  label: "A♭"
}, {
  value: "eb",
  label: "E♭"
}, {
  value: "bb",
  label: "B♭"
}, {
  value: "f",
  label: "F"
}];
var optionsMinor = [{
  value: "am",
  label: "Am"
}, {
  value: "em",
  label: "Em"
}, {
  value: "bm",
  label: "Bm"
}, {
  value: "f#m",
  label: "F♯m"
}, {
  value: "c#m",
  label: "C♯m"
}, {
  value: "g#m",
  label: "G♯m"
}, {
  value: "abm",
  label: "A♭m"
}, {
  value: "d#m",
  label: "D♯m"
}, {
  value: "ebm",
  label: "E♭m"
}, {
  value: "a#m",
  label: "A♯m"
}, {
  value: "bbm",
  label: "B♭m"
}, {
  value: "fm",
  label: "Fm"
}, {
  value: "cm",
  label: "Cm"
}, {
  value: "gm",
  label: "Gm"
}, {
  value: "dm",
  label: "Dm"
}];
var FormSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Filters__FormSection",
  componentId: "sc-1ktafxn-1"
})(["margin-bottom:20px;"]);

var Filters =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Filters);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Filters)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedOption: null,
      isMinor: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      _this.props.selectedKey(selectedOption);
    });

    return _this;
  }

  _createClass(Filters, [{
    key: "toggleCheckbox",
    value: function toggleCheckbox(e) {
      this.setState({
        isMinor: e.target.checked
      });
      this.props.minor(e.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedOption = this.state.selectedOption;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Key"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.state.isMinor ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: selectedOption,
        onChange: this.handleChange,
        options: optionsMinor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: selectedOption,
        onChange: this.handleChange,
        options: optionsMajor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        id: "minor",
        label: "Minor",
        checked: this.state.isMinor,
        onChange: this.toggleCheckbox.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })));
    }
  }]);

  return Filters;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/music/MusicStaff.js":
/*!****************************************!*\
  !*** ./components/music/MusicStaff.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MusicStaff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_g_clef_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/g-clef.png */ "./assets/img/g-clef.png");
/* harmony import */ var _assets_img_g_clef_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_g_clef_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_whole_note_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/whole-note.png */ "./assets/img/whole-note.png");
/* harmony import */ var _assets_img_whole_note_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_whole_note_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\projects\\henlit.se\\components\\music\\MusicStaff.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MusicStaff__Wrapper",
  componentId: "sc-1n7x86-0"
})(["position:relative;margin-top:40px;margin-bottom:40px;"]);
var Staff = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MusicStaff__Staff",
  componentId: "sc-1n7x86-1"
})(["width:600px;"]);
var Line = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MusicStaff__Line",
  componentId: "sc-1n7x86-2"
})(["height:1px;margin-bottom:14px;background-color:#000;"]);
var Gclef = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "MusicStaff__Gclef",
  componentId: "sc-1n7x86-3"
})(["position:absolute;top:-25px;left:0;height:116px;"]);
var WholeNote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "MusicStaff__WholeNote",
  componentId: "sc-1n7x86-4"
})(["position:absolute;top:", ";left:", ";height:14px;"], function (props) {
  return props.octave && "".concat(noteSteps[props.octave], "px");
}, function (props) {
  return props.index > 0 ? "".concat(155 + 55 * props.index, "px") : '155px';
});
var noteSteps = {
  'B3': 75,
  'C4': 68,
  'D4': 61,
  'E4': 54,
  'F4': 46,
  'G4': 39,
  'A4': 31,
  'B4': 24,
  'C5': 16,
  'D5': 9,
  'E5': 1,
  'F5': -6,
  'G5': -14,
  'A5': -21
};

var MusicStaff =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MusicStaff, _React$Component);

  function MusicStaff() {
    _classCallCheck(this, MusicStaff);

    return _possibleConstructorReturn(this, _getPrototypeOf(MusicStaff).apply(this, arguments));
  }

  _createClass(MusicStaff, [{
    key: "render",
    value: function render() {
      var octaves = this.props.octaves;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, octaves.map(function (octave, index) {
        console.log(index, octave);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WholeNote, {
          src: _assets_img_whole_note_png__WEBPACK_IMPORTED_MODULE_3___default.a,
          octave: octave,
          index: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gclef, {
        src: _assets_img_g_clef_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Staff, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })));
    }
  }]);

  return MusicStaff;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/music/MusicTable.js":
/*!****************************************!*\
  !*** ./components/music/MusicTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MusicTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles */ "./components/Styles.js");
/* harmony import */ var _music_MusicStaff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music/MusicStaff */ "./components/music/MusicStaff.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\projects\\henlit.se\\components\\music\\MusicTable.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "MusicTable__Section",
  componentId: "w21wid-0"
})(["margin-bottom:40px;"]);

var MusicTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MusicTable, _React$Component);

  function MusicTable(props) {
    _classCallCheck(this, MusicTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(MusicTable).call(this, props));
  }

  _createClass(MusicTable, [{
    key: "render",
    value: function render() {
      var currentKey = this.props.currentKey;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, currentKey.meta.name + " " + currentKey.meta.quality), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Relative Key"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, currentKey.relativeKey)), currentKey.enharmonic && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Enharmonic Key"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, currentKey.enharmonic.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, currentKey.notes.map(function (note, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
          key: index.toString(),
          direction: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, note);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_music_MusicStaff__WEBPACK_IMPORTED_MODULE_2__["default"], {
        octaves: currentKey.octaves,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Chords"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), currentKey.chords.map(function (chord, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Th"], {
          key: index.toString(),
          quality: chord.quality,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, chord.roman);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Chord"), currentKey.chords.map(function (chord, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
          key: index.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, chord.chord);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Triad"), currentKey.chords.map(function (chord, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
          key: index.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, chord.triad);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Seventh"), currentKey.chords.map(function (chord, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["Td"], {
          key: index.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "".concat(chord.triad, "-").concat(chord.seventh));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Common Chord Progressions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, currentKey.chordProgressions.map(function (chordProgression, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styles__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
          key: index.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, chordProgression);
      }))));
    }
  }]);

  return MusicTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./data/keyData.json":
/*!***************************!*\
  !*** ./data/keyData.json ***!
  \***************************/
/*! exports provided: keys, default */
/***/ (function(module) {

module.exports = {"keys":{"major":{"c":{"meta":{"name":"C","quality":"Major"},"relativeKey":"A Minor","notes":["C","D","E","F","G","A","B"],"octaves":["C4","D4","E4","F4","G4","A4","B4"],"chords":[{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B","roman":"I","western":"1"},{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"ii","western":"2"},{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"iii","western":"3"},{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E","roman":"IV","western":"4"},{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F","roman":"V","western":"5"},{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"vi","western":"6"},{"chord":"B°","quality":"Diminished","triad":"B-D-F","seventh":"A","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (C-F-G)","1-6-4-5 (C-Am-F-G)","2-5-1 (Dm7-G7-Cmaj7)"]},"g":{"meta":{"name":"G","quality":"Major"},"relativeKey":"E Minor","notes":["G","A","B","C","D","E","F♯"],"octaves":["G4","A4","B4","C5","D5","E5","F5"],"chords":[{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F#","roman":"I","western":"1"},{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"ii","western":"2"},{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"iii","western":"3"},{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B","roman":"IV","western":"4"},{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C","roman":"V","western":"5"},{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"vi","western":"6"},{"chord":"F♯°","quality":"Diminished","triad":"F♯-A-C","seventh":"E","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (G-C-D)","1-6-4-5 (G-Em-C-D)","2-5-1 (Am7-D7-Gmaj7)"]},"d":{"meta":{"name":"D","quality":"Major"},"relativeKey":"B Minor","notes":["D","E","F♯","G","A","B","C♯"],"octaves":["D4","E4","F4","G4","A4","B4","C5"],"chords":[{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C♯","roman":"I","western":"1"},{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"ii","western":"2"},{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"iii","western":"3"},{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F♯","roman":"IV","western":"4"},{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G","roman":"V","western":"5"},{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"vi","western":"6"},{"chord":"C♯°","quality":"Diminished","triad":"C♯-E-G","seventh":"B","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (D-G-A)","1-6-4-5 (D-Bm-G-A)","2-5-1 (Em7-A7-Dmaj7)"]},"a":{"meta":{"name":"A","quality":"Major"},"relativeKey":"F♯ Minor","notes":["A","B","C♯","D","E","F♯","G♯"],"octaves":["A4","B4","C5","D5","E5","F5","G5"],"chords":[{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G♯","roman":"I","western":"1"},{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"ii","western":"2"},{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"iii","western":"3"},{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C♯","roman":"IV","western":"4"},{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D","roman":"V","western":"5"},{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"vi","western":"6"},{"chord":"G♯°","quality":"Diminished","triad":"G♯-B-D","seventh":"F♯","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (D-G-A)","1-6-4-5 (D-Bm-G-A)","2-5-1 (Em7-A7-Dmaj7)"]},"e":{"meta":{"name":"E","quality":"Major"},"relativeKey":"C♯ Minor","notes":["E","F♯","G♯","A","B","C♯","D♯"],"octaves":["E4","F4","G4","A4","B4","C5","D5"],"chords":[{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D♯","roman":"I","western":"1"},{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"ii","western":"2"},{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"iii","western":"3"},{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G♯","roman":"IV","western":"4"},{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A♯","roman":"V","western":"5"},{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"vi","western":"6"},{"chord":"D♯°","quality":"Diminished","triad":"D♯-F♯-A","seventh":"C♯","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (E-A-B)","1-6-4-5 (E-C♯m-A-B)","2-5-1 (F♯m7-B7-Emaj7)"]},"b":{"meta":{"name":"B","quality":"Major"},"enharmonic":{"id":"cb","name":"C♭ Major"},"relativeKey":"G♯ Minor","notes":["B","C♯","D♯","E","F♯","G♯","A♯"],"octaves":["B3","C4","D4","E4","F4","G4","A4"],"chords":[{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A♯","roman":"I","western":"1"},{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"ii","western":"2"},{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"iii","western":"3"},{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D♯","roman":"IV","western":"4"},{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E","roman":"V","western":"5"},{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"vi","western":"6"},{"chord":"A♯°","quality":"Diminished","triad":"A♯-C♯-E","seventh":"G♯","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (B-E-F♯)","1-6-4-5 (B-G♯m-E-F♯)","2-5-1 (C♯m7-F♯7-Bmaj7)"]},"cb":{"meta":{"name":"C♭","quality":"Major"},"enharmonic":{"id":"b","name":"B Major"},"relativeKey":"A♭ Minor","notes":["C♭","D♭","E♭","F♭","G♭","A♭","B♭"],"octaves":["C4","D4","E4","F4","G4","A4","B4"],"chords":[{"chord":"C♭","quality":"Major","triad":"C♭-E♭-G♭","seventh":"B♭","roman":"I","western":"1"},{"chord":"D♭m","quality":"Minor","triad":"D♭-F♭-A♭","seventh":"C♭","roman":"ii","western":"2"},{"chord":"E♭m","quality":"Minor","triad":"E♭-G♭-B♭","seventh":"D♭","roman":"iii","western":"3"},{"chord":"F♭","quality":"Major","triad":"F♭-A♭-C♭","seventh":"E♭","roman":"IV","western":"4"},{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F♭","roman":"V","western":"5"},{"chord":"A♭m","quality":"Minor","triad":"A♭-C♭-E♭","seventh":"G♭","roman":"vi","western":"6"},{"chord":"B♭°","quality":"Diminished","triad":"B♭-D♭-F♭","seventh":"A♭","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (C♭-F♭-G♭)","1-6-4-5 (C♭-A♭m-F♭-G♭)","2-5-1 (D♭m7-G♭7-C♭maj7)"]},"f#":{"meta":{"name":"F♯","quality":"Major"},"enharmonic":{"id":"gb","name":"G♭ Major"},"relativeKey":"D♯ Minor","notes":["F♯","G♯","A♯","B","C♯","D♯","E♯"],"octaves":["F4","G4","A4","B4","C5","D5","E5"],"chords":[{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E♯","roman":"I","western":"1"},{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"ii","western":"2"},{"chord":"A♯m","quality":"Minor","triad":"A♯-C♯-E♯","seventh":"G♯","roman":"iii","western":"3"},{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A♯","roman":"IV","western":"4"},{"chord":"C♯","quality":"Major","triad":"C♯-E♯-G♯","seventh":"B","roman":"V","western":"5"},{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"vi","western":"6"},{"chord":"E♯°","quality":"Diminished","triad":"E♯-G♯-B","seventh":"D♯","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (F♯-B-C♯)","1-6-4-5 (F♯-D♯m-B-C♯)","2-5-1 (G♯m7-C♯7-F♯maj7)"]},"gb":{"meta":{"name":"G♭","quality":"Major"},"enharmonic":{"id":"f#","name":"F♯ Major"},"relativeKey":"E♭ Minor","notes":["G♭","A♭","B♭","C♭","D♭","E♭","F"],"octaves":["G4","A4","B4","C5","D5","E5","F5"],"chords":[{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F","roman":"I","western":"1"},{"chord":"A♭m","quality":"Minor","triad":"A♭-C♭-E♭","seventh":"G♭","roman":"ii","western":"2"},{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"iii","western":"3"},{"chord":"C♭","quality":"Major","triad":"C♭-E♭-G♭","seventh":"B♭","roman":"IV","western":"4"},{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C♭","roman":"V","western":"5"},{"chord":"E♭m","quality":"Minor","triad":"E♭-G♭-B♭","seventh":"D♭","roman":"vi","western":"6"},{"chord":"F°","quality":"Diminished","triad":"F-A♭-C♭","seventh":"E♭","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (G♭-C♭-D♭)","1-6-4-5 (G♭-E♭m-C♭-D♭)","2-5-1 (A♭m7-D♭7-G♭maj7)"]},"c#":{"meta":{"name":"C♯","quality":"Major"},"enharmonic":{"id":"db","name":"D♭ Major"},"relativeKey":"A♯ Minor","notes":["C♯","D♯","E♯","F♯","G♯","A♯","B♯"],"octaves":["C4","D4","E4","F4","G4","A4","B4"],"chords":[{"chord":"C♯","quality":"Major","triad":"C♯-E♯-G♯","seventh":"B♯","roman":"I","western":"1"},{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"ii","western":"2"},{"chord":"E♯m","quality":"Minor","triad":"E♯-G♯-B♯","seventh":"D♯","roman":"iii","western":"3"},{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E♯","roman":"IV","western":"4"},{"chord":"G♯","quality":"Major","triad":"G♯-B♯-D♯","seventh":"F♯","roman":"V","western":"5"},{"chord":"A♯m","quality":"Minor","triad":"A♯-C♯-E♯","seventh":"G♯","roman":"vi","western":"6"},{"chord":"B♯°","quality":"Diminished","triad":"B♯-D♯-F♯","seventh":"A♯","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (C♯-F♯-G♯)","1-6-4-5 (C♯-A♯m-F♯-G♯)","2-5-1 (D♯m7-G♯7-C♯maj7)"]},"db":{"meta":{"name":"D♭","quality":"Major"},"enharmonic":{"id":"c#","name":"C♯ Major"},"relativeKey":"B♭ Minor","notes":["D♭","E♭","F","G♭","A♭","B♭","C"],"chords":[{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C","roman":"I","western":"1"},{"chord":"E♭m","quality":"Minor","triad":"E♭-G♭-B♭","seventh":"D♭","roman":"ii","western":"2"},{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"iii","western":"3"},{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F","roman":"IV","western":"4"},{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G♭","roman":"V","western":"5"},{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"vi","western":"6"},{"chord":"C°","quality":"Diminished","triad":"C-E♭-G♭","seventh":"B♭","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (D♭-G♭-A♭)","1-6-4-5 (D♭-B♭m-G♭-A♭)","2-5-1 (E♭m7-A♭7-D♭maj7)"]},"ab":{"meta":{"name":"A♭","quality":"Major"},"relativeKey":"F Minor","notes":["A♭","B♭","C","D♭","E♭","F","G"],"chords":[{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G","roman":"I","western":"1"},{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"ii","western":"2"},{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"iii","western":"3"},{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C","roman":"IV","western":"4"},{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D♭","roman":"V","western":"5"},{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"vi","western":"6"},{"chord":"G°","quality":"Diminished","triad":"G-B♭-D♭","seventh":"F","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (A♭-D♭-E♭)","1-6-4-5 (A♭-Fm-D♭-E♭)","2-5-1 (B♭m7-E♭7-A♭maj7)"]},"eb":{"meta":{"name":"E♭","quality":"Major"},"relativeKey":"C Minor","notes":["E♭","F","G","A♭","B♭","C","D"],"chords":[{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D","roman":"I","western":"1"},{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"ii","western":"2"},{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"iii","western":"3"},{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G","roman":"IV","western":"4"},{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A♭","roman":"V","western":"5"},{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"vi","western":"6"},{"chord":"D°","quality":"Diminished","triad":"D-F-A♭","seventh":"C","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (E♭-A♭-B♭)","1-6-4-5 (E♭-Cm-A♭-B♭)","2-5-1 (Fm7-B♭7-E♭maj7)"]},"bb":{"meta":{"name":"B♭","quality":"Major"},"relativeKey":"G Minor","notes":["B♭","C","D","E♭","F","G","A"],"chords":[{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A","roman":"I","western":"1"},{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"ii","western":"2"},{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"iii","western":"3"},{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D","roman":"IV","western":"4"},{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E♭","roman":"V","western":"5"},{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"vi","western":"6"},{"chord":"A°","quality":"Diminished","triad":"A-C-E♭","seventh":"G","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (B♭-E♭-F)","1-6-4-5 (B♭-Gm-E♭-F)","2-5-1 (Cm7-F7-B♭maj7)"]},"f":{"meta":{"name":"F","quality":"Major"},"relativeKey":"D Minor","notes":["F","G","A","B♭","C","D","E"],"chords":[{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E","roman":"I","western":"1"},{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"ii","western":"2"},{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"iii","western":"3"},{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A","roman":"IV","western":"4"},{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B♭","roman":"V","western":"5"},{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"vi","western":"6"},{"chord":"E°","quality":"Diminished","triad":"E-G-B♭","seventh":"D","roman":"vii°","western":"7"}],"chordProgressions":["1-4-5 (F-B♭-C)","1-6-4-5 (F-Dm-B♭-C)","2-5-1 (Gm7-C7-Fmaj7)"]}},"minor":{"am":{"meta":{"name":"A","quality":"Minor"},"relativeKey":"C Major","notes":["A","B","C","D","E","F","G"],"chords":[{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"i","western":"1"},{"chord":"B°","quality":"Diminished","triad":"B-D-F","seventh":"A","roman":"ii°","western":"2"},{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B","roman":"III","western":"3"},{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"iv","western":"4"},{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"v","western":"5"},{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E","roman":"VI","western":"6"},{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Am-F-G)","1-4-7 (Am-Dm-G)","1-4-5 (Am-Dm-Em)","1-6-3-7 (Am-F-C-G)","2-5-1 (Bm7♭5-Em-Am)"]},"em":{"meta":{"name":"E","quality":"Minor"},"relativeKey":"G Major","notes":["E","F♯","G","A","B","C","D"],"chords":[{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"i","western":"1"},{"chord":"F♯°","quality":"Diminished","triad":"F♯-A-C","seventh":"E","roman":"ii°","western":"2"},{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F♯","roman":"III","western":"3"},{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"iv","western":"4"},{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"v","western":"5"},{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B","roman":"VI","western":"6"},{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Em-C-D)","1-4-7 (Em-Am-D)","1-4-5 (Em-Am-Bm)","1-6-3-7 (Em-C-G-D)","2-5-1 (F♯m7♭5-Bm-Em)"]},"bm":{"meta":{"name":"B","quality":"Minor"},"relativeKey":"D Major","notes":["B","C♯","D","E","F♯","G","A"],"chords":[{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"i","western":"1"},{"chord":"C♯°","quality":"Diminished","triad":"C♯-E-G","seventh":"B","roman":"ii°","western":"2"},{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C♯","roman":"III","western":"3"},{"chord":"Em","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"iv","western":"4"},{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"v","western":"5"},{"chord":"G","quality":"Major","triad":"G-B-D","seventh":"F♯","roman":"VI","western":"6"},{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Bm-G-A)","1-4-7 (Bm-Em-A)","1-4-5 (Bm-Em-F♯m)","1-6-3-7 (Bm-G-D-A)","2-5-1 (C♯m7♭5-F♯m-Bm)"]},"f#m":{"meta":{"name":"F♯","quality":"Minor"},"relativeKey":"A Major","notes":["F♯","G♯","A","B","C♯","D","E"],"chords":[{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"i","western":"1"},{"chord":"G♯°","quality":"Diminished","triad":"G♯-B-D","seventh":"F♯","roman":"ii°","western":"2"},{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G♯","roman":"III","western":"3"},{"chord":"Bm","quality":"Minor","triad":"B-D-F♯","seventh":"A","roman":"iv","western":"4"},{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"v","western":"5"},{"chord":"D","quality":"Major","triad":"D-F♯-A","seventh":"C♯","roman":"VI","western":"6"},{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (F♯m-D-E)","1-4-7 (F♯m-Bm-E)","1-4-5 (F♯m-Bm-C♯m)","1-6-3-7 (F♯m-D-A-E)","2-5-1 (G♯m7♭5-C♯m-F♯m)"]},"c#m":{"meta":{"name":"C","quality":"Minor"},"relativeKey":"E Major","notes":["C♯","D♯","E","F♯","G♯","A","B"],"chords":[{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"i","western":"1"},{"chord":"D♯°","quality":"Diminished","triad":"D♯-F♯-A","seventh":"C♯","roman":"ii°","western":"2"},{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D♯","roman":"III","western":"3"},{"chord":"F♯m","quality":"Minor","triad":"F♯-A-C♯","seventh":"E","roman":"iv","western":"4"},{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"v","western":"5"},{"chord":"A","quality":"Major","triad":"A-C♯-E","seventh":"G♯","roman":"VI","western":"6"},{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (C♯m-A-B)","1-4-7 (C♯m-F♯m-B)","1-4-5 (C♯m-F♯m-G♯m)","1-6-3-7 (C♯m-A-E-B)","2-5-1 (D♯m7♭5-G♯m-C♯m)"]},"g#m":{"meta":{"name":"G♯","quality":"Minor"},"relativeKey":"B Major","enharmonic":{"id":"abm","name":"A♭ Minor"},"notes":["G♯","A♯","B","C♯","D♯","E","F♯"],"chords":[{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"i","western":"1"},{"chord":"A♯°","quality":"Diminished","triad":"A♯-C♯-E","seventh":"G♯","roman":"ii°","western":"2"},{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A♯","roman":"III","western":"3"},{"chord":"C♯m","quality":"Minor","triad":"C♯-E-G♯","seventh":"B","roman":"iv","western":"4"},{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"v","western":"5"},{"chord":"E","quality":"Major","triad":"E-G♯-B","seventh":"D♯","roman":"VI","western":"6"},{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (G♯m-E-F♯)","1-4-7 (G♯m-C♯m-F♯)","1-4-5 (G♯m-C♯m-D♯m)","1-6-3-7 (G♯m-E-B-F♯)","2-5-1 (A♯m7♭5-D♯m-G♯m)"]},"abm":{"meta":{"name":"A♭","quality":"Minor"},"relativeKey":"C♭ Major","enharmonic":{"id":"g#m","name":"G♯ Minor"},"notes":["A♭","B♭","C♭","D♭","E♭","F♭","G♭"],"chords":[{"chord":"A♭m","quality":"Minor","triad":"A♭-C♭-E♭","seventh":"G♭","roman":"i","western":"1"},{"chord":"B♭°","quality":"Diminished","triad":"B♭-D♭-F♭","seventh":"A♭","roman":"ii°","western":"2"},{"chord":"C♭","quality":"Major","triad":"C♭-E♭-G♭","seventh":"B♭","roman":"III","western":"3"},{"chord":"D♭m","quality":"Minor","triad":"D♭-F♭-A♭","seventh":"C♭","roman":"iv","western":"4"},{"chord":"E♭m","quality":"Minor","triad":"E♭-G♭-B♭","seventh":"D♭","roman":"v","western":"5"},{"chord":"F♭","quality":"Major","triad":"F♭-A♭-C♭","seventh":"E♭","roman":"VI","western":"6"},{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (A♭m-F♭-G♭)","1-4-7 (A♭m-D♭m-G♭)","1-4-5 (A♭m-D♭m-E♭m)","1-6-3-7 (A♭m-F♭-C♭-G♭)","2-5-1 (B♭m7♭5-E♭m-A♭m)"]},"d#m":{"meta":{"name":"D♯","quality":"Minor"},"relativeKey":"F♯ Major","enharmonic":{"id":"ebm","name":"E♭ Minor"},"notes":["D♯","E♯","F♯","G♯","A♯","B","C♯"],"chords":[{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"i","western":"1"},{"chord":"E♯°","quality":"Diminished","triad":"E♯-G♯-B","seventh":"D♯","roman":"ii°","western":"2"},{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E♯","roman":"III","western":"3"},{"chord":"G♯m","quality":"Minor","triad":"G♯-B-D♯","seventh":"F♯","roman":"iv","western":"4"},{"chord":"A♯m","quality":"Minor","triad":"A♯-C♯-E♯","seventh":"G♯","roman":"v","western":"5"},{"chord":"B","quality":"Major","triad":"B-D♯-F♯","seventh":"A♯","roman":"VI","western":"6"},{"chord":"C♯","quality":"Major","triad":"C♯-E♯-G♯","seventh":"B","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (D♯m-B-C♯)","1-4-7 (D♯m-G♯m-C♯)","1-4-5 (D♯m-G♯m-A♯m)","1-6-3-7 (D♯m-B-F♯-C♯)","2-5-1 (E♯m7♭5-A♯m-D♯m)"]},"ebm":{"meta":{"name":"E♭","quality":"Minor"},"relativeKey":"G♭ Major","notes":["E♭","F","G♭","A♭","B♭","C♭","D♭"],"chords":[{"chord":"E♭m","quality":"Minor","triad":"E-G-B","seventh":"D","roman":"i","western":"1"},{"chord":"F°","quality":"Diminished","triad":"F-A♭-C♭","seventh":"E♭","roman":"ii°","western":"2"},{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F","roman":"III","western":"3"},{"chord":"A♭m","quality":"Minor","triad":"A♭-C♭-E♭","seventh":"G♭","roman":"iv","western":"4"},{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"v","western":"5"},{"chord":"C♭","quality":"Major","triad":"C♭-E♭-G♭","seventh":"B♭","roman":"VI","western":"6"},{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (E♭m-C♭-D♭)","1-4-7 (E♭m-A♭m-D♭)","1-4-5 (E♭m-A♭m-B♭m)","1-6-3-7 (E♭m-C♭-G♭-D♭)","2-5-1 (Fm7♭5-B♭m-E♭m)"]},"a#m":{"meta":{"name":"A♯","quality":"Minor"},"relativeKey":"C♯ Major","enharmonic":{"id":"bbm","name":"B♭ Minor"},"notes":["A♯","B♯","C♯","D♯","E♯","F♯","G♯"],"chords":[{"chord":"A♯m","quality":"Minor","triad":"A♯-C♯-E♯","seventh":"G♯","roman":"i","western":"1"},{"chord":"B♯°","quality":"Diminished","triad":"B♯-D♯-F♯","seventh":"A♯","roman":"ii°","western":"2"},{"chord":"C♯","quality":"Major","triad":"C♯-E♯-G♯","seventh":"B♯","roman":"III","western":"3"},{"chord":"D♯m","quality":"Minor","triad":"D♯-F♯-A♯","seventh":"C♯","roman":"iv","western":"4"},{"chord":"E♯m","quality":"Minor","triad":"E♯-G♯-B♯","seventh":"D♯","roman":"v","western":"5"},{"chord":"F♯","quality":"Major","triad":"F♯-A♯-C♯","seventh":"E♯","roman":"VI","western":"6"},{"chord":"G♯","quality":"Major","triad":"G♯-B♯-D♯","seventh":"F♯","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (A♯m-F♯-G♯)","1-4-7 (A♯m-D♯m-G♯)","1-4-5 (A♯m-D♯m-E♯m)","1-6-3-7 (A♯m-F♯-C♯-G♯)","2-5-1 (B♯m7♭5-E♯m-A♯m)"]},"bbm":{"meta":{"name":"B","quality":"Minor"},"relativeKey":"D♭ Major","enharmonic":{"id":"a#m","name":"A♯ Minor"},"notes":["B♭","C","D♭","E♭","F","G♭","A♭"],"chords":[{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"i","western":"1"},{"chord":"C°","quality":"Diminished","triad":"C-E♭-G♭","seventh":"B♭","roman":"ii°","western":"2"},{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C","roman":"III","western":"3"},{"chord":"E♭m","quality":"Minor","triad":"E♭-G♭-B♭","seventh":"D♭","roman":"iv","western":"4"},{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"v","western":"5"},{"chord":"G♭","quality":"Major","triad":"G♭-B♭-D♭","seventh":"F","roman":"VI","western":"6"},{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (B♭m-G♭-A♭)","1-4-7 (B♭m-E♭m-A♭)","1-4-5 (B♭m-E♭m-Fm)","1-6-3-7 (B♭m-G♭-D♭-A♭)","2-5-1 (Cm7♭5-Fm-B♭m)"]},"fm":{"meta":{"name":"F","quality":"Minor"},"relativeKey":"A♭ Major","notes":["F","G","A♭","B♭","C","D♭","E♭"],"chords":[{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"i","western":"1"},{"chord":"G°","quality":"Diminished","triad":"G-B♭-D♭","seventh":"F","roman":"ii°","western":"2"},{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G","roman":"III","western":"3"},{"chord":"B♭m","quality":"Minor","triad":"B♭-D♭-F","seventh":"A♭","roman":"iv","western":"4"},{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"v","western":"5"},{"chord":"D♭","quality":"Major","triad":"D♭-F-A♭","seventh":"C","roman":"VI","western":"6"},{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Fm-D♭-E♭)","1-4-7 (Fm-B♭m-E♭)","1-4-5 (Fm-B♭m-Cm)","1-6-3-7 (Fm-D♭-A♭-E♭)","2-5-1 (Gm7♭5-Cm-Fm)"]},"cm":{"meta":{"name":"C","quality":"Minor"},"relativeKey":"E♭ Major","notes":["C","D","E♭","F","G","A♭","B♭"],"chords":[{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"i","western":"1"},{"chord":"D°","quality":"Diminished","triad":"D-F-A♭","seventh":"C","roman":"ii°","western":"2"},{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D","roman":"III","western":"3"},{"chord":"Fm","quality":"Minor","triad":"F-A♭-C","seventh":"E♭","roman":"iv","western":"4"},{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"v","western":"5"},{"chord":"A♭","quality":"Major","triad":"A♭-C-E♭","seventh":"G","roman":"VI","western":"6"},{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Cm-Ab-Bb)","1-4-7 (Cm-Fm-Bb)","1-4-5 (Cm-Fm-Gm)","1-6-3-7 (Cm-Ab-Eb-Bb)","2-5-1 (Dm7♭5-Gm-Cm)"]},"gm":{"meta":{"name":"G","quality":"Minor"},"relativeKey":"B♭ Major","notes":["G","A","B♭","C","D","E♭","F"],"chords":[{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"i","western":"1"},{"chord":"A°","quality":"Diminished","triad":"A-C-E♭","seventh":"G","roman":"ii°","western":"2"},{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A","roman":"III","western":"3"},{"chord":"Cm","quality":"Minor","triad":"C-E♭-G","seventh":"B♭","roman":"iv","western":"4"},{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"v","western":"5"},{"chord":"E♭","quality":"Major","triad":"E♭-G-B♭","seventh":"D","roman":"VI","western":"6"},{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Gm-E♭-F)","1-4-7 (Gm-Cm-F)","1-4-5 (Gm-Cm-Dm)","1-6-3-7 (Gm-E♭-B♭-F)","2-5-1 (Am7♭5-Dm-Gm)"]},"dm":{"meta":{"name":"D","quality":"Minor"},"relativeKey":"F Major","notes":["D","E","F","G","A","B♭","C"],"chords":[{"chord":"Dm","quality":"Minor","triad":"D-F-A","seventh":"C","roman":"i","western":"1"},{"chord":"E°","quality":"Diminished","triad":"E-G-B♭","seventh":"D","roman":"ii°","western":"2"},{"chord":"F","quality":"Major","triad":"F-A-C","seventh":"E","roman":"III","western":"3"},{"chord":"Gm","quality":"Minor","triad":"G-B♭-D","seventh":"F","roman":"iv","western":"4"},{"chord":"Am","quality":"Minor","triad":"A-C-E","seventh":"G","roman":"v","western":"5"},{"chord":"B♭","quality":"Major","triad":"B♭-D-F","seventh":"A","roman":"VI","western":"6"},{"chord":"C","quality":"Major","triad":"C-E-G","seventh":"B♭","roman":"VII","western":"7"}],"chordProgressions":["1-6-7 (Dm-B♭-C)","1-4-7 (Dm-Gm-C)","1-4-5 (Dm-Gm-Am)","1-6-3-7 (Dm-B♭-F-C)","2-5-1 (Em7♭5-Am-Dm)"]}}}};

/***/ }),

/***/ "./pages/music.js":
/*!************************!*\
  !*** ./pages/music.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_music_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/music/Filters */ "./components/music/Filters.js");
/* harmony import */ var _components_music_MusicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/music/MusicTable */ "./components/music/MusicTable.js");
/* harmony import */ var _components_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Styles */ "./components/Styles.js");
/* harmony import */ var _data_keyData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/keyData.json */ "./data/keyData.json");
var _data_keyData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/keyData.json */ "./data/keyData.json", 1);
var _jsxFileName = "D:\\projects\\henlit.se\\pages\\music.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Music =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Music, _React$Component);

  function Music(props) {
    var _this;

    _classCallCheck(this, Music);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Music).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelection", function (selection) {
      var isMinor = _this.state.minor;
      var key = selection.value;
      var currentKey = _data_keyData_json__WEBPACK_IMPORTED_MODULE_5__.keys[isMinor ? 'minor' : 'major'][key];

      if (!currentKey) {
        _this.msg = 'No data found';
      }

      _this.setState({
        currentKey: currentKey,
        key: key
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckbox", function (minor) {
      _this.setState({
        minor: minor ? true : false
      });
    });

    _this.state = {
      currentKey: [],
      key: null,
      minor: false
    };
    _this.msg = 'Select a key';
    return _this;
  }

  _createClass(Music, [{
    key: "render",
    value: function render() {
      var currentKey = this.state.currentKey;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Styles__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Styles__WEBPACK_IMPORTED_MODULE_4__["SideMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_music_Filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedKey: this.handleSelection,
        minor: this.handleCheckbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), currentKey && currentKey.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Styles__WEBPACK_IMPORTED_MODULE_4__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_music_MusicTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        currentKey: currentKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Styles__WEBPACK_IMPORTED_MODULE_4__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.msg))));
    }
  }]);

  return Music;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/music.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/music.js */"./pages/music.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=music.js.map