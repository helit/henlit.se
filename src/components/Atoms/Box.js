"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var theme_1 = require("../../theme");
var BoxWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 8px;\n  background-color: ", ";\n  border-radius: 8px;\n"], ["\n  width: 100%;\n  padding: 8px;\n  background-color: ", ";\n  border-radius: 8px;\n"])), theme_1.theme.container);
var Box = function (_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(BoxWrapper, { children: children });
};
exports.Box = Box;
var templateObject_1;
