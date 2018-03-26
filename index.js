var McDatesController = /** @class */ (function () {
    function McDatesController($scope) {
        var _this = this;
        this.$scope = $scope;
        this.FORMAT = "YYYY-MM-DD";
        $scope.$watch(function () { return _this.dateFrom; }, function (newValue, oldValue) {
            var m = moment(newValue, _this.FORMAT);
            if (m.format(_this.FORMAT) === newValue) {
                _this.from = m.toDate();
            }
        });
        $scope.$watch(function () { return _this.dateTo; }, function (newValue, oldValue) {
            var m = moment(newValue, _this.FORMAT);
            if (m.format(_this.FORMAT) === newValue) {
                _this.to = m.toDate();
            }
        });
    }
    Object.defineProperty(McDatesController.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            if (value == null) {
                this._from = undefined;
                this.dateFrom = value;
                return;
            }
            var m = moment(value, this.FORMAT);
            this._from = m.toDate();
            this.dateFrom = m.format(this.FORMAT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(McDatesController.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (value) {
            if (value == null) {
                this._to = undefined;
                this.dateTo = value;
                return;
            }
            var m = moment(value, this.FORMAT);
            this._to = m.toDate();
            this.dateTo = m.format(this.FORMAT);
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
            return m.format('YYYY.MM.DD');
        return "";
    };
})
    .component("mcDates", new McDatesComponent());
//# sourceMappingURL=index.js.map