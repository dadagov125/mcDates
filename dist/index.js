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
                        return m.format("YYYY.MM.DD");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFFNUI7SUFBQTtJQThEQSxDQUFDO0lBckRHLHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDeEIsQ0FBQzthQUVELFVBQVMsS0FBSztZQUNWLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pELENBQUM7OztPQU5BO0lBUUQsc0JBQUksaUNBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUN0QixDQUFDO2FBRUQsVUFBTyxLQUFL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LENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEVBQUU7SUFDYixDQUFDLENBQUM7SUFFRixxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsVUFBVSxVQUFVO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUNELFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsImNvbnN0IEZPUk1BVCA9IFwiWVlZWS1NTS1ERFwiO1xuXG5jbGFzcyBNY0RhdGVzQ29udHJvbGxlciBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgICBfbWluRGF0ZTogRGF0ZVxuXG5cbiAgICBfbWF4RGF0ZTogRGF0ZVxuXG5cbiAgICBnZXQgZnJvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZyb21cbiAgICB9XG5cbiAgICBzZXQgZnJvbSh2YWx1ZSkge1xuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWx1ZSwgRk9STUFUKTtcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IG0udG9EYXRlKClcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IG0uaXNWYWxpZCgpID8gbS5mb3JtYXQoRk9STUFUKSA6IG51bGxcbiAgICB9XG5cbiAgICBnZXQgdG8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUb1xuICAgIH1cblxuICAgIHNldCB0byh2YWx1ZSkge1xuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWx1ZSwgRk9STUFUKTtcbiAgICAgICAgdGhpcy5fbWF4RGF0ZSA9IG0udG9EYXRlKClcbiAgICAgICAgdGhpcy5kYXRlVG8gPSBtLmlzVmFsaWQoKSA/IG0uZm9ybWF0KEZPUk1BVCkgOiBudWxsXG4gICAgfVxuXG4gICAgY2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5tY0NoYW5nZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tY0NoYW5nZSgpXG4gICAgICAgICAgICB9LCAyMClcbiAgICB9XG5cbiAgICBzZXREYXRlKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50byA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0d29fd2Vla3NcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBtb21lbnQoKS5zdWJ0cmFjdCgyLCBcIndlZWtzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwibW9udGhzXCIpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBtb21lbnQoKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudG8gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgIH1cblxufVxuXG5cbmNsYXNzIE1jRGF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcblxuXG4gICAgcHVibGljIGNvbnRyb2xsZXI6IG5nLkluamVjdGFibGU8bmcuSUNvbnRyb2xsZXJDb25zdHJ1Y3Rvcj47XG4gICAgcHVibGljIGNvbnRyb2xsZXJBczogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGJpbmRpbmdzPzogeyBbYm91bmRQcm9wZXJ0eTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgcmVxdWlyZT86IHsgW2NvbnRyb2xsZXI6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IE1jRGF0ZXNDb250cm9sbGVyO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9IFwiJGN0cmxcIjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGBcbiAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGZsZXg9XCI0MFwiIGZsZXgtb2Zmc2V0PVwiMzVcIiBsYXlvdXQtYWxpZ249XCJjZW50ZXJcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzM1wiICBsYXlvdXQ9XCJjb2x1bW5cIj7RgTwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzM1wiIGxheW91dD1cImNvbHVtblwiPtC/0L48L2Rpdj4gICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmbGV4PVwiMzBcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWRhdGVwaWNrZXIgY2xhc3M9XCJwaWNrZXJcIiBuZy1jaGFuZ2U9XCIkY3RybC5jaGFuZ2UoKVwiICBtZC1tYXgtZGF0ZT1cIiRjdHJsLl9tYXhEYXRlXCIgbmctbW9kZWw9XCIkY3RybC5mcm9tXCIgbWQtcGxhY2Vob2xkZXI9XCJFbnRlciBkYXRlIGZyb21cIj48L21kLWRhdGVwaWNrZXI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZsZXg9XCIzMFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGF0ZXBpY2tlciBjbGFzcz1cInBpY2tlclwiIG5nLWNoYW5nZT1cIiRjdHJsLmNoYW5nZSgpXCIgbWQtbWluLWRhdGU9XCIkY3RybC5fbWluRGF0ZVwiIG5nLW1vZGVsPVwiJGN0cmwudG9cIiBtZC1wbGFjZWhvbGRlcj1cIkVudGVyIGRhdGUgdG9cIj48L21kLWRhdGVwaWNrZXI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiAgICBjbGFzcz1cIm1jLWRhdGVzLWxpbmtzXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICA8YSAgIG5nLWNsaWNrPVwiJGN0cmwuc2V0RGF0ZSgneWVzdGVyZGF5JylcIiBocmVmPVwiXCI+0JLRh9C10YDQsDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgZmxleC1vZmZzZXQ9XCI1XCIgIG5nLWNsaWNrPVwiJGN0cmwuc2V0RGF0ZSgndG9kYXknKVwiIGhyZWY9XCJcIj7QodC10LPQvtC00L3RjzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgZmxleC1vZmZzZXQ9XCI1XCIgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCd0d29fd2Vla3MnKVwiIGhyZWY9XCJcIj4yINC90LXQtNC10LvQuDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgZmxleC1vZmZzZXQ9XCI1XCIgbmctY2xpY2s9XCIkY3RybC5zZXREYXRlKCdtb250aCcpXCIgaHJlZj1cIlwiPtCc0LXRgdGP0YY8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgIDxhIGZsZXgtb2Zmc2V0PVwiNVwiICBuZy1jbGljaz1cIiRjdHJsLnNldERhdGUoJ2FsbCcpXCIgaHJlZj1cIlwiPtCS0YHQtTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgLnBpY2tlciAubWQtZGF0ZXBpY2tlci1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAubWMtZGF0ZXMtbGlua3N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHtcbiAgICAgICAgICAgIFwiZGF0ZUZyb21cIjogXCI9XCIsXG4gICAgICAgICAgICBcImRhdGVUb1wiOiBcIj1cIixcbiAgICAgICAgICAgIFwibWNDaGFuZ2VcIjogXCImXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0ge31cbiAgICB9XG5cbn1cblxuYW5ndWxhci5tb2R1bGUoXCJtY0RhdGVzTW9kdWxlXCIsIFtcIm5nTWF0ZXJpYWxcIl0pXG4gICAgLmNvbmZpZygoJG1kRGF0ZUxvY2FsZVByb3ZpZGVyKSA9PiB7XG5cbiAgICAgICAgJG1kRGF0ZUxvY2FsZVByb3ZpZGVyLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgbGV0IG0gPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgICAgICBpZiAobS5pc1ZhbGlkKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG0uZm9ybWF0KFwiWVlZWS5NTS5ERFwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgJG1kRGF0ZUxvY2FsZVByb3ZpZGVyLnBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzdHJpbmdEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoc3RyaW5nRGF0ZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNvbXBvbmVudChcIm1jRGF0ZXNcIiwgbmV3IE1jRGF0ZXNDb21wb25lbnQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==