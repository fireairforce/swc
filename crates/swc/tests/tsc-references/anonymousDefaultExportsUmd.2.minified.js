//// [a.ts]
var global, factory;
global = this, factory = function(exports1) {
    Object.defineProperty(exports1, "__esModule", {
        value: !0
    }), Object.defineProperty(exports1, "default", {
        enumerable: !0,
        get: function() {
            return _default;
        }
    });
    class _default {
    }
}, "object" == typeof module && "object" == typeof module.exports ? factory(exports) : "function" == typeof define && define.amd ? define([
    "exports"
], factory) : (global = "undefined" != typeof globalThis ? globalThis : global || self) && factory(global.aTs = {});
//// [b.ts]
var global, factory;
global = this, factory = function(exports1) {
    function _default() {}
    Object.defineProperty(exports1, "__esModule", {
        value: !0
    }), Object.defineProperty(exports1, "default", {
        enumerable: !0,
        get: function() {
            return _default;
        }
    });
}, "object" == typeof module && "object" == typeof module.exports ? factory(exports) : "function" == typeof define && define.amd ? define([
    "exports"
], factory) : (global = "undefined" != typeof globalThis ? globalThis : global || self) && factory(global.bTs = {});
