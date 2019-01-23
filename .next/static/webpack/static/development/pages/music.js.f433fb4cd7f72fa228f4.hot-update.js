webpackHotUpdate("static\\development\\pages\\music.js",{

/***/ "./components/music/MusicStaff.js":
/*!****************************************!*\
  !*** ./components/music/MusicStaff.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MusicStaff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MusicStaff__Wrapper",
  componentId: "sc-1n7x86-0"
})(["position:relative;margin-top:40px;margin-bottom:40px;"]);
var Staff = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MusicStaff__Staff",
  componentId: "sc-1n7x86-1"
})(["width:500px;"]);
var Line = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MusicStaff__Line",
  componentId: "sc-1n7x86-2"
})(["height:1px;margin-bottom:14px;background-color:#000;"]);
var Gclef = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "MusicStaff__Gclef",
  componentId: "sc-1n7x86-3"
})(["position:absolute;top:-25px;left:0;height:116px;"]);
var WholeNote = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "MusicStaff__WholeNote",
  componentId: "sc-1n7x86-4"
})(["position:absolute;top:68px;left:155px;height:14px;"]);
var NoteStartPosition = {
  "clef": {
    "g": {
      "notes": {
        "C": {
          "position": {
            "x": 155,
            "y": 68
          },
          "guideline": true
        },
        "D": {
          "position": {
            "x": 155,
            "y": 61
          },
          "guideline": false
        },
        "E": {
          "position": {
            "x": 155,
            "y": 54
          },
          "guideline": false
        },
        "F": {
          "position": {
            "x": 155,
            "y": 47
          },
          "guideline": false
        },
        "G": {
          "position": {
            "x": 155,
            "y": 40
          },
          "guideline": false
        },
        "A": {
          "position": {
            "x": 155,
            "y": 33
          },
          "guideline": false
        },
        "B": {
          "position": {
            "x": 155,
            "y": 26
          }
        }
      }
    }
  }
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WholeNote, {
        src: _assets_img_whole_note_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gclef, {
        src: _assets_img_g_clef_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Staff, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })));
    }
  }]);

  return MusicStaff;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=music.js.f433fb4cd7f72fa228f4.hot-update.js.map