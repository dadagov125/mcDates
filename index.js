var McDatesController = /** @class */ (function () {
    function McDatesController() {
        var _this = this;
        this.FORMAT = "YYYY-MM-DD";
        this.change = function () {
            if (_this.ctrl.mcChange !== undefined)
                _this.ctrl.mcChange();
        };
        this.ctrl = this;
        this._from = moment().toDate();
        this._to = moment().toDate();
    }
    Object.defineProperty(McDatesController.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            var m = moment(value, this.FORMAT);
            this._from = m.toDate();
            this.ctrl.dateFrom = m.format(this.FORMAT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(McDatesController.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (value) {
            var m = moment(value, this.FORMAT);
            this._to = m.toDate();
            this.ctrl.dateTo = m.format(this.FORMAT);
        },
        enumerable: true,
        configurable: true
    });
    return McDatesController;
}());
var McDatesComponent = /** @class */ (function () {
    function McDatesComponent() {
        this.controller = McDatesController;
        this.controllerAs = "$ctrl";
        this.template = "\n          <div>          \n                  \u0441\n                  <md-datepicker ng-change=\"$ctrl.change()\"  md-max-date=\"$ctrl.to\" ng-model=\"$ctrl.from\" md-placeholder=\"Enter date from\"></md-datepicker>                  \n     \n                  \u043F\u043E\n                  <md-datepicker ng-change=\"$ctrl.change()\" md-min-date=\"$ctrl.from\" ng-model=\"$ctrl.to\" md-placeholder=\"Enter date to\"></md-datepicker>            \n                   \n                 \n          </div>\n          <div>\n           <a ng-click=\"$ctrl.change()\" href=\"\">\u0412\u0447\u0435\u0440\u0430</a>\n           <a ng-click=\"$ctrl.change()\" href=\"\">\u0421\u0435\u0433\u043E\u0434\u043D\u044F</a>\n           <a ng-click=\"$ctrl.change()\" href=\"\">2 \u043D\u0435\u0434\u0435\u043B\u0438</a>\n           <a ng-click=\"$ctrl.change()\" href=\"\">\u041C\u0435\u0441\u044F\u0446</a>\n           <a ng-click=\"$ctrl.change()\" href=\"\">\u0412\u0441\u0435</a>\n          </div>\n      \n        ";
        this.bindings = {
            "dateFrom": "=",
            "dateTo": "=",
            "mcChange": "&"
        };
        this.require = {};
    }
    return McDatesComponent;
}());
angular.module("mcDatesModule", ["ngMaterial", "ngAnimate", "ngAria", 'ngMessages'])
    .component("mcDates", new McDatesComponent());
//# sourceMappingURL=index.js.map