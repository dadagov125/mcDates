!function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var a = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: o})
    }, n.r = function (t) {
        Object.defineProperty(t, "__esModule", {value: !0})
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e) {
    var n = "YYYY-MM-DD", o = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "from", {
            get: function () {
                return this.dateFrom
            }, set: function (t) {
                var e = moment(t, n);
                this._minDate = e.toDate(), this.dateFrom = e.isValid() ? e.format(n) : null
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "to", {
            get: function () {
                return this.dateTo
            }, set: function (t) {
                var e = moment(t, n);
                this._maxDate = e.toDate(), this.dateTo = e.isValid() ? e.format(n) : null
            }, enumerable: !0, configurable: !0
        }), t.prototype.change = function () {
            var t = this;
            void 0 !== this.mcChange && setTimeout(function () {
                t.mcChange()
            }, 20)
        }, t.prototype.setDate = function (t) {
            switch (t) {
                case"yesterday":
                    this.from = moment().subtract(1, "days").toDate(), this.to = moment().subtract(1, "days").toDate();
                    break;
                case"today":
                    this.from = moment().toDate(), this.to = moment().toDate();
                    break;
                case"two_weeks":
                    this.from = moment().subtract(2, "weeks").toDate(), this.to = moment().toDate();
                    break;
                case"month":
                    this.from = moment().subtract(1, "months").toDate(), this.to = moment().toDate();
                    break;
                case"all":
                    this.from = null, this.to = null
            }
            this.change()
        }, t
    }(), a = function () {
        this.controller = o, this.controllerAs = "$ctrl", this.template = '\n          <div layout="column" flex="40" flex-offset="35" layout-align="center">           \n                    <div layout="row">  \n                           <div flex="33"  layout="column">с</div>  \n                           <div flex="33" layout="column">по</div>     \n                    </div> \n                    <div layout="row"> \n                           <div flex="30" layout="column">\n                             <md-datepicker class="picker" ng-change="$ctrl.change()"  md-max-date="$ctrl._maxDate" ng-model="$ctrl.from" md-placeholder="Enter date from"></md-datepicker> \n                            </div>  \n                           <div flex="30" layout="column">\n                             <md-datepicker class="picker" ng-change="$ctrl.change()" md-min-date="$ctrl._minDate" ng-model="$ctrl.to" md-placeholder="Enter date to"></md-datepicker> \n                            </div>   \n                    </div>                     \n                    <div layout="row"    class="mc-dates-links"> \n                       <a   ng-click="$ctrl.setDate(\'yesterday\')" href="">Вчера</a>\n                       <a flex-offset="5"  ng-click="$ctrl.setDate(\'today\')" href="">Сегодня</a>\n                       <a flex-offset="5" ng-click="$ctrl.setDate(\'two_weeks\')" href="">2 недели</a>\n                       <a flex-offset="5" ng-click="$ctrl.setDate(\'month\')" href="">Месяц</a>\n                       <a flex-offset="5"  ng-click="$ctrl.setDate(\'all\')" href="">Все</a>\n                    </div> \n               <style>\n               .picker .md-datepicker-button {\n                  display: none;\n                }\n               .mc-dates-links{\n                    font-size: 12px;\n               }\n               </style>                                        \n          </div>    \n        ', this.bindings = {
            dateFrom: "=",
            dateTo: "=",
            mcChange: "&"
        }
    };
    angular.module("mcDatesModule", ["ngMaterial"]).config(["$mdDateLocaleProvider", function (t) {
        t.formatDate = function (t) {
            var e = moment(t);
            return e.isValid() ? e.format("DD.MM.YYYY") : ""
        }
    }]).component("mcDates", new a)
}]);