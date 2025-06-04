"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Cursor_1 = require("@/components/Effects/Cursor");
var AsciiArt_1 = require("@/components/Three/AsciiArt");
var theme_1 = require("@/theme");
var styled_1 = __importDefault(require("@emotion/styled"));
var MainWrapper = styled_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  gap: 8px;\n  border: thick double ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  gap: 8px;\n  border: thick double ", ";\n"])), theme_1.theme.primary);
var Main = function () {
    return ((0, jsx_runtime_1.jsxs)(MainWrapper, { children: [(0, jsx_runtime_1.jsx)("div", { style: { padding: "0 16px" }, children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: theme_1.theme.primary, fontWeight: "bold" }, children: "Hello" }), ", nice to meet you!"] }) }), (0, jsx_runtime_1.jsx)(AsciiArt_1.AsciiArt, {}), (0, jsx_runtime_1.jsxs)("div", { style: { padding: "0 16px" }, children: [(0, jsx_runtime_1.jsxs)("p", { style: { maxWidth: "500px" }, children: ["My name is", " ", (0, jsx_runtime_1.jsx)("span", { style: { color: theme_1.theme.primary, fontWeight: "bold" }, children: "Henrik Littke" }), ", I'm a fullstack web developer based in Gothenburg, Sweden. I'm specialized in node.js, react & typescript. I also like to code other things and tinker with computers. I sometimes make games and 3d models."] }), (0, jsx_runtime_1.jsxs)("p", { style: { maxWidth: "500px" }, children: ["If you want to get in touch, send me an email at henrik(a)henlit.se", (0, jsx_runtime_1.jsx)(Cursor_1.Cursor, {})] })] })] }));
};
exports.Main = Main;
var templateObject_1;
