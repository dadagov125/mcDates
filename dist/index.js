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
                    this._minDate = m.toDate();
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
                    this._maxDate = m.toDate();
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
                this.template = "\n          <div layout=\"column\" flex=\"40\" flex-offset=\"35\" layout-align=\"center\">           \n                    <div layout=\"row\">  \n                           <div flex=\"33\"  layout=\"column\">\u0441</div>  \n                           <div flex=\"33\" layout=\"column\">\u043F\u043E</div>     \n                    </div> \n                    <div layout=\"row\"> \n                           <div flex=\"30\" layout=\"column\">\n                             <md-datepicker class=\"picker\" ng-change=\"$ctrl.change()\"  md-max-date=\"$ctrl._maxDate\" ng-model=\"$ctrl.from\" md-placeholder=\"Enter date from\"></md-datepicker> \n                            </div>  \n                           <div flex=\"30\" layout=\"column\">\n                             <md-datepicker class=\"picker\" ng-change=\"$ctrl.change()\" md-min-date=\"$ctrl._minDate\" ng-model=\"$ctrl.to\" md-placeholder=\"Enter date to\"></md-datepicker> \n                            </div>   \n                    </div>                     \n                    <div layout=\"row\"    class=\"mc-dates-links\"> \n                       <a   ng-click=\"$ctrl.setDate('yesterday')\" href=\"\">\u0412\u0447\u0435\u0440\u0430</a>\n                       <a flex-offset=\"5\"  ng-click=\"$ctrl.setDate('today')\" href=\"\">\u0421\u0435\u0433\u043E\u0434\u043D\u044F</a>\n                       <a flex-offset=\"5\" ng-click=\"$ctrl.setDate('two_weeks')\" href=\"\">2 \u043D\u0435\u0434\u0435\u043B\u0438</a>\n                       <a flex-offset=\"5\" ng-click=\"$ctrl.setDate('month')\" href=\"\">\u041C\u0435\u0441\u044F\u0446</a>\n                       <a flex-offset=\"5\"  ng-click=\"$ctrl.setDate('all')\" href=\"\">\u0412\u0441\u0435</a>\n                    </div> \n               <style>\n               .picker .md-datepicker-button {\n                  display: none;\n                }\n               .mc-dates-links{\n                    font-size: 12px;\n               }\n               </style>                                        \n          </div>    \n        ";
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
                        return m.format("DD.MM.YYYY");
                    return "";
                };
                $mdDateLocaleProvider.parseDate = function (stringDate) {
                    return new Date(stringDate);
                };
            })
            .component("mcDates", new McDatesComponent());


        /***/
    })

    /******/
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFFNUI7SUFBQTtJQThEQSxDQUFDO0lBckRHLHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDeEIsQ0FBQzthQUVELFVBQVMsS0FBSztZQUNWLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekQsQ0FBQzs7O09BTkE7SUFRRCxzQkFBSSxpQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQ3RCLENBQUM7YUFFRCxVQUFP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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0lBRUYscUJBQXFCLENBQUMsU0FBUyxHQUFHLFVBQVUsVUFBVTtRQUNsRCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7QUFDTCxDQUFDLENBQUM7S0FDRCxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJjb25zdCBGT1JNQVQgPSBcIllZWVktTU0tRERcIjtcblxuY2xhc3MgTWNEYXRlc0NvbnRyb2xsZXIgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBbeDogc3RyaW5nXTogYW55O1xuXG4gICAgX21pbkRhdGU6IERhdGU7XG5cblxuICAgIF9tYXhEYXRlOiBEYXRlO1xuXG5cbiAgICBnZXQgZnJvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZyb21cbiAgICB9XG5cbiAgICBzZXQgZnJvbSh2YWx1ZSkge1xuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWx1ZSwgRk9STUFUKTtcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IG0udG9EYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0ZUZyb20gPSBtLmlzVmFsaWQoKSA/IG0uZm9ybWF0KEZPUk1BVCkgOiBudWxsXG4gICAgfVxuXG4gICAgZ2V0IHRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVG9cbiAgICB9XG5cbiAgICBzZXQgdG8odmFsdWUpIHtcbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsdWUsIEZPUk1BVCk7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtLnRvRGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVUbyA9IG0uaXNWYWxpZCgpID8gbS5mb3JtYXQoRk9STUFUKSA6IG51bGxcbiAgICB9XG5cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1jQ2hhbmdlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1jQ2hhbmdlKClcbiAgICAgICAgICAgIH0sIDIwKVxuICAgIH1cblxuICAgIHNldERhdGUodmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcInllc3RlcmRheVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvID0gbW9tZW50KCkuc3VidHJhY3QoMSwgXCJkYXlzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tID0gbW9tZW50KCkudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG1vbWVudCgpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR3b193ZWVrc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KDIsIFwid2Vla3NcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG1vbWVudCgpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tID0gbW9tZW50KCkuc3VidHJhY3QoMSwgXCJtb250aHNcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG1vbWVudCgpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZSgpXG4gICAgfVxuXG59XG5cblxuY2xhc3MgTWNEYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuXG5cbiAgICBwdWJsaWMgY29udHJvbGxlcjogbmcuSW5qZWN0YWJsZTxuZy5JQ29udHJvbGxlckNvbnN0cnVjdG9yPjtcbiAgICBwdWJsaWMgY29udHJvbGxlckFzOiBzdHJpbmc7XG4gICAgcHVibGljIHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgYmluZGluZ3M/OiB7IFtib3VuZFByb3BlcnR5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICByZXF1aXJlPzogeyBbY29udHJvbGxlcjogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTWNEYXRlc0NvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gXCIkY3RybFwiO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gYFxuICAgICAgICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgZmxleD1cIjQwXCIgZmxleC1vZmZzZXQ9XCIzNVwiIGxheW91dC1hbGlnbj1cImNlbnRlclwiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZmxleD1cIjMzXCIgIGxheW91dD1cImNvbHVtblwiPtGBPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZmxleD1cIjMzXCIgbGF5b3V0PVwiY29sdW1uXCI+0L/QvjwvZGl2PiAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzMFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGF0ZXBpY2tlciBjbGFzcz1cInBpY2tlclwiIG5nLWNoYW5nZT1cIiRjdHJsLmNoYW5nZSgpXCIgIG1kLW1heC1kYXRlPVwiJGN0cmwuX21heERhdGVcIiBuZy1tb2RlbD1cIiRjdHJsLmZyb21cIiBtZC1wbGFjZWhvbGRlcj1cIkVudGVyIGRhdGUgZnJvbVwiPjwvbWQtZGF0ZXBpY2tlcj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZmxleD1cIjMwXCIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1kYXRlcGlja2VyIGNsYXNzPVwicGlja2VyXCIgbmctY2hhbmdlPVwiJGN0cmwuY2hhbmdlKClcIiBtZC1taW4tZGF0ZT1cIiRjdHJsLl9taW5EYXRlXCIgbmctbW9kZWw9XCIkY3RybC50b1wiIG1kLXBsYWNlaG9sZGVyPVwiRW50ZXIgZGF0ZSB0b1wiPjwvbWQtZGF0ZXBpY2tlcj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiICAgIGNsYXNzPVwibWMtZGF0ZXMtbGlua3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgIDxhICAgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCd5ZXN0ZXJkYXknKVwiIGhyZWY9XCJcIj7QktGH0LXRgNCwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiAgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCd0b2RheScpXCIgaHJlZj1cIlwiPtCh0LXQs9C+0LTQvdGPPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiBuZy1jbGljaz1cIiRjdHJsLnNldERhdGUoJ3R3b193ZWVrcycpXCIgaHJlZj1cIlwiPjIg0L3QtdC00LXQu9C4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBmbGV4LW9mZnNldD1cIjVcIiBuZy1jbGljaz1cIiRjdHJsLnNldERhdGUoJ21vbnRoJylcIiBocmVmPVwiXCI+0JzQtdGB0Y/RhjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgZmxleC1vZmZzZXQ9XCI1XCIgIG5nLWNsaWNrPVwiJGN0cmwuc2V0RGF0ZSgnYWxsJylcIiBocmVmPVwiXCI+0JLRgdC1PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAucGlja2VyIC5tZC1kYXRlcGlja2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5tYy1kYXRlcy1saW5rc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge1xuICAgICAgICAgICAgXCJkYXRlRnJvbVwiOiBcIj1cIixcbiAgICAgICAgICAgIFwiZGF0ZVRvXCI6IFwiPVwiLFxuICAgICAgICAgICAgXCJtY0NoYW5nZVwiOiBcIiZcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSB7fVxuICAgIH1cblxufVxuXG5hbmd1bGFyLm1vZHVsZShcIm1jRGF0ZXNNb2R1bGVcIiwgW1wibmdNYXRlcmlhbFwiXSlcbiAgICAuY29uZmlnKCgkbWREYXRlTG9jYWxlUHJvdmlkZXIpID0+IHtcblxuICAgICAgICAkbWREYXRlTG9jYWxlUHJvdmlkZXIuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgbSA9IG1vbWVudChkYXRlKTtcbiAgICAgICAgICAgIGlmIChtLmlzVmFsaWQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfTtcblxuICAgICAgICAkbWREYXRlTG9jYWxlUHJvdmlkZXIucGFyc2VEYXRlID0gZnVuY3Rpb24gKHN0cmluZ0RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShzdHJpbmdEYXRlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuY29tcG9uZW50KFwibWNEYXRlc1wiLCBuZXcgTWNEYXRlc0NvbXBvbmVudCgpKTsiXSwic291cmNlUm9vdCI6IiJ9