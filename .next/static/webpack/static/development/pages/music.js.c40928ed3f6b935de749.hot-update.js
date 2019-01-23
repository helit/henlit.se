webpackHotUpdate("static\\development\\pages\\music.js",{

/***/ "./components/music/MusicTable.js":
/*!****************************************!*\
  !*** ./components/music/MusicTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MusicTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles */ "./components/Styles.js");
/* harmony import */ var _music_MusicStaff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music/MusicStaff */ "./components/music/MusicStaff.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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




var Section = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
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



/***/ })

})
//# sourceMappingURL=music.js.c40928ed3f6b935de749.hot-update.js.map