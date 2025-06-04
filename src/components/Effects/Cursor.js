"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Cursor = function () {
    var _a = (0, react_1.useState)(true), showCursor = _a[0], setShowCursor = _a[1];
    (0, react_1.useEffect)(function () {
        var intervalId = setInterval(function () {
            setShowCursor(function (showCursor) { return !showCursor; });
        }, 500);
        return function () { return clearInterval(intervalId); };
    }, []);
    return (0, jsx_runtime_1.jsx)("span", { children: showCursor ? "█" : " " });
};
exports.Cursor = Cursor;
