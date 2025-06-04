"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.InnerWrapper = exports.OuterWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var theme_1 = require("@/theme");
var styled_1 = __importDefault(require("@emotion/styled"));
exports.OuterWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: \"Ubuntu Sans Mono\", monospace;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  background-color: ", ";\n  color: ", ";\n  padding: 4px;\n  height: 100%;\n"], ["\n  font-family: \"Ubuntu Sans Mono\", monospace;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  background-color: ", ";\n  color: ", ";\n  padding: 4px;\n  height: 100%;\n"])), theme_1.theme.background, theme_1.theme.text);
exports.InnerWrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  height: inherit;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  height: inherit;\n"])));
var Wrapper = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(exports.OuterWrapper, { children: (0, jsx_runtime_1.jsx)(exports.InnerWrapper, { children: children }) }));
};
exports.Wrapper = Wrapper;
var templateObject_1, templateObject_2;
