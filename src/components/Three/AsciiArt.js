"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiArt = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fiber_1 = require("@react-three/fiber");
var react_1 = require("react");
var theme_1 = require("@/theme");
var drei_1 = require("@react-three/drei");
var Tetra = function (props) {
    var meshRef = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(function (state, delta) {
        meshRef.current.rotation.x += delta / 5;
        meshRef.current.rotation.y += delta / 3;
        meshRef.current.rotation.z += delta / 5;
    });
    return ((0, jsx_runtime_1.jsxs)("mesh", __assign({}, props, { ref: meshRef, scale: 3, children: [(0, jsx_runtime_1.jsx)("tetrahedronGeometry", {}), (0, jsx_runtime_1.jsx)("meshStandardMaterial", { color: theme_1.theme.primary })] })));
};
var AsciiArt = function () {
    return ((0, jsx_runtime_1.jsxs)(fiber_1.Canvas, { frameloop: 'always', style: { maxWidth: "400px", height: "350px", padding: "8px" }, children: [(0, jsx_runtime_1.jsx)(drei_1.AsciiRenderer, { color: true, 
                // fgColor={theme.primary}
                invert: false, bgColor: "transparent", characters: " @#%*+|/!;:~,.^`'\"()[]{}<>", resolution: 0.13 }), (0, jsx_runtime_1.jsx)("ambientLight", { intensity: Math.PI / 5 }), (0, jsx_runtime_1.jsx)("pointLight", { position: [0, -4, 4], decay: 0, intensity: Math.PI }), (0, jsx_runtime_1.jsx)(Tetra, { position: [0, 0, 0] })] }));
};
exports.AsciiArt = AsciiArt;
