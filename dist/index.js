/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./index.ts");
    /******/
})
/************************************************************************/
/******/({

    /***/ "./index.ts":
    /*!******************!*\
      !*** ./index.ts ***!
      \******************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        var FORMAT = "YYYY-MM-DD";
        var McDatesController = /** @class */ (function () {
            function McDatesController() {
            }

            Object.defineProperty(McDatesController.prototype, "from", {
                get: function () {
                    return this.dateFrom;
                },
                set: function (value) {
                    var m = moment(value, FORMAT);
                    this.dateFrom = m.isValid() ? m.format(FORMAT) : null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(McDatesController.prototype, "to", {
                get: function () {
                    return this.dateTo;
                },
                set: function (value) {
                    var m = moment(value, FORMAT);
                    this.dateTo = m.isValid() ? m.format(FORMAT) : null;
                },
                enumerable: true,
                configurable: true
            });
            McDatesController.prototype.change = function () {
                var _this = this;
                if (this.mcChange !== undefined)
                    setTimeout(function () {
                        _this.mcChange();
                    }, 20);
            };
            McDatesController.prototype.setDate = function (value) {
                switch (value) {
                    case "yesterday":
                        this.from = moment().subtract(1, "days").toDate();
                        this.to = moment().subtract(1, "days").toDate();
                        break;
                    case "today":
                        this.from = moment().toDate();
                        this.to = moment().toDate();
                        break;
                    case "two_weeks":
                        this.from = moment().subtract(2, "weeks").toDate();
                        this.to = moment().toDate();
                        break;
                    case "month":
                        this.from = moment().subtract(1, "months").toDate();
                        this.to = moment().toDate();
                        break;
                    case "all":
                        this.from = null;
                        this.to = null;
                        break;
                }
                this.change();
            };
            return McDatesController;
        }());
        var McDatesComponent = /** @class */ (function () {
            function McDatesComponent() {
                this.controller = McDatesController;
                this.controllerAs = "$ctrl";
                this.template = "\n          <div layout=\"column\" flex=\"40\" flex-offset=\"35\" layout-align=\"center\">           \n                    <div layout=\"row\">  \n                           <div flex=\"33\"  layout=\"column\">\u0441</div>  \n                           <div flex=\"33\" layout=\"column\">\u043F\u043E</div>     \n                    </div> \n                    <div layout=\"row\"> \n                           <div flex=\"30\" layout=\"column\">\n                             <md-datepicker class=\"picker\" ng-change=\"$ctrl.change()\"  md-max-date=\"$ctrl.to\" ng-model=\"$ctrl.from\" md-placeholder=\"Enter date from\"></md-datepicker> \n                            </div>  \n                           <div flex=\"30\" layout=\"column\">\n                             <md-datepicker class=\"picker\" ng-change=\"$ctrl.change()\" md-min-date=\"$ctrl.from\" ng-model=\"$ctrl.to\" md-placeholder=\"Enter date to\"></md-datepicker> \n                            </div>   \n                    </div>                     \n                    <div layout=\"row\"    class=\"mc-dates-links\"> \n                       <a   ng-click=\"$ctrl.setDate('yesterday')\" href=\"\">\u0412\u0447\u0435\u0440\u0430</a>\n                       <a flex-offset=\"5\"  ng-click=\"$ctrl.setDate('today')\" href=\"\">\u0421\u0435\u0433\u043E\u0434\u043D\u044F</a>\n                       <a flex-offset=\"5\" ng-click=\"$ctrl.setDate('two_weeks')\" href=\"\">2 \u043D\u0435\u0434\u0435\u043B\u0438</a>\n                       <a flex-offset=\"5\" ng-click=\"$ctrl.setDate('month')\" href=\"\">\u041C\u0435\u0441\u044F\u0446</a>\n                       <a flex-offset=\"5\"  ng-click=\"$ctrl.setDate('all')\" href=\"\">\u0412\u0441\u0435</a>\n                    </div> \n               <style>\n               .picker .md-datepicker-button {\n                  display: none;\n                }\n               .mc-dates-links{\n                    font-size: 12px;\n               }\n               </style>                                        \n          </div>    \n        ";
                this.bindings = {
                    "dateFrom": "=",
                    "dateTo": "=",
                    "mcChange": "&"
                };
                this.require = {};
            }

            return McDatesComponent;
        }());
        angular.module("mcDatesModule", ["ngMaterial"])
            .config(function ($mdDateLocaleProvider) {
                $mdDateLocaleProvider.formatDate = function (date) {
                    var m = moment(date);
                    if (m.isValid())
                        return m.format("YYYY.MM.DD");
                    return "";
                };
            })
            .component("mcDates", new McDatesComponent());


        /***/
    })

    /******/
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFDNUI7SUFBQTtJQXNEQSxDQUFDO0lBbkRHLHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDeEIsQ0FBQzthQUVELFVBQVMsS0FBSztZQUNWLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekQsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSxpQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQ3RCLENBQUM7YUFFRCxVQUFPLEtBQUs7WUFDUixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0s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Q0FBQyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0tBQ0QsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgRk9STUFUID0gXCJZWVlZLU1NLUREXCI7XG5jbGFzcyBNY0RhdGVzQ29udHJvbGxlciBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgICBnZXQgZnJvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZyb21cbiAgICB9XG5cbiAgICBzZXQgZnJvbSh2YWx1ZSkge1xuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWx1ZSwgRk9STUFUKTtcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IG0uaXNWYWxpZCgpID8gbS5mb3JtYXQoRk9STUFUKSA6IG51bGxcbiAgICB9XG5cbiAgICBnZXQgdG8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUb1xuICAgIH1cblxuICAgIHNldCB0byh2YWx1ZSkge1xuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWx1ZSwgRk9STUFUKTtcbiAgICAgICAgdGhpcy5kYXRlVG8gPSBtLmlzVmFsaWQoKSA/IG0uZm9ybWF0KEZPUk1BVCkgOiBudWxsXG4gICAgfVxuXG4gICAgY2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5tY0NoYW5nZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tY0NoYW5nZSgpXG4gICAgICAgICAgICB9LCAyMClcbiAgICB9XG5cbiAgICBzZXREYXRlKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0d29fd2Vla3NcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBtb21lbnQoKS5zdWJ0cmFjdCgyLCBcIndlZWtzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwibW9udGhzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgIH1cblxufVxuXG5cbmNsYXNzIE1jRGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcblxuXG4gICAgcHVibGljIGNvbnRyb2xsZXI6IG5nLkluamVjdGFibGU8bmcuSUNvbnRyb2xsZXJDb25zdHJ1Y3Rvcj47XG4gICAgcHVibGljIGNvbnRyb2xsZXJBczogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGJpbmRpbmdzPzogeyBbYm91bmRQcm9wZXJ0eTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgcmVxdWlyZT86IHsgW2NvbnRyb2xsZXI6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IE1jRGF0ZXNDb250cm9sbGVyO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9IFwiJGN0cmxcIjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGBcbiAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGZsZXg9XCI0MFwiIGZsZXgtb2Zmc2V0PVwiMzVcIiBsYXlvdXQtYWxpZ249XCJjZW50ZXJcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzM1wiICBsYXlvdXQ9XCJjb2x1bW5cIj7RgTwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzM1wiIGxheW91dD1cImNvbHVtblwiPtC/0L48L2Rpdj4gICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmbGV4PVwiMzBcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWRhdGVwaWNrZXIgY2xhc3M9XCJwaWNrZXJcIiBuZy1jaGFuZ2U9XCIkY3RybC5jaGFuZ2UoKVwiICBtZC1tYXgtZGF0ZT1cIiRjdHJsLnRvXCIgbmctbW9kZWw9XCIkY3RybC5mcm9tXCIgbWQtcGxhY2Vob2xkZXI9XCJFbnRlciBkYXRlIGZyb21cIj48L21kLWRhdGVwaWNrZXI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzMFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGF0ZXBpY2tlciBjbGFzcz1cInBpY2tlclwiIG5nLWNoYW5nZT1cIiRjdHJsLmNoYW5nZSgpXCIgbWQtbWluLWRhdGU9XCIkY3RybC5mcm9tXCIgbmctbW9kZWw9XCIkY3RybC50b1wiIG1kLXBsYWNlaG9sZGVyPVwiRW50ZXIgZGF0ZSB0b1wiPjwvbWQtZGF0ZXBpY2tlcj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiICAgIGNsYXNzPVwibWMtZGF0ZXMtbGlua3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgIDxhICAgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCd5ZXN0ZXJkYXknKVwiIGhyZWY9XCJcIj7QktGH0LXRgNCwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiAgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCd0b2RheScpXCIgaHJlZj1cIlwiPtCh0LXQs9C+0LTQvdGPPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiBuZy1jbGljaz1cIiRjdHJsLnNldERhdGUoJ3R3b193ZWVrcycpXCIgaHJlZj1cIlwiPjIg0L3QtdC00LXQu9C4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiBuZy1jbGljaz1cIiRjdHJsLnNldERhdGUoJ21vbnRoJylcIiBocmVmPVwiXCI+0JzQtdGB0Y/RhjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgZmxleC1vZmZzZXQ9XCI1XCIgIG5nLWNsaWNrPVwiJGN0cmwuc2V0RGF0ZSgnYWxsJylcIiBocmVmPVwiXCI+0JLRgdC1PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAucGlja2VyIC5tZC1kYXRlcGlja2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5tYy1kYXRlcy1saW5rc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge1xuICAgICAgICAgICAgXCJkYXRlRnJvbVwiOiBcIj1cIixcbiAgICAgICAgICAgIFwiZGF0ZVRvXCI6IFwiPVwiLFxuICAgICAgICAgICAgXCJtY0NoYW5nZVwiOiBcIiZcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSB7fVxuICAgIH1cblxufVxuXG5hbmd1bGFyLm1vZHVsZShcIm1jRGF0ZXNNb2R1bGVcIiwgW1wibmdNYXRlcmlhbFwiXSlcbiAgICAuY29uZmlnKCgkbWREYXRlTG9jYWxlUHJvdmlkZXIpID0+IHtcblxuICAgICAgICAkbWREYXRlTG9jYWxlUHJvdmlkZXIuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgbSA9IG1vbWVudChkYXRlKTtcbiAgICAgICAgICAgIGlmIChtLmlzVmFsaWQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfTtcbiAgICB9KVxuICAgIC5jb21wb25lbnQoXCJtY0RhdGVzXCIsIG5ldyBNY0RhdGVzQ29tcG9uZW50KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=