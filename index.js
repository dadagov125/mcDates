(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./McDatesComponent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var McDatesComponent_1 = require("./McDatesComponent");
    exports.mcDatesModule = angular.module("mcDatesModule", []).component("mcDates", new McDatesComponent_1.McDatesComponent());
});
