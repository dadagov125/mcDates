const FORMAT = "YYYY-MM-DD";

class McDatesController implements angular.IComponentController {
    [x: string]: any;

    _minDate: Date;


    _maxDate: Date;


    get from() {
        return this.dateFrom
    }

    set from(value) {
        let m = moment(value, FORMAT);
        this._minDate = m.toDate();
        this.dateFrom = m.isValid() ? m.format(FORMAT) : null
    }

    get to() {
        return this.dateTo
    }

    set to(value) {
        let m = moment(value, FORMAT);
        this._maxDate = m.toDate();
        this.dateTo = m.isValid() ? m.format(FORMAT) : null
    }

    change() {
        if (this.mcChange !== undefined)
            setTimeout(() => {
                this.mcChange()
            }, 20)
    }

    setDate(value) {
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
                break
        }
        this.change()
    }

}


class McDatesComponent implements angular.IComponentOptions {


    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;
    bindings?: { [boundProperty: string]: string };
    require?: { [controller: string]: string };

    constructor() {
        this.controller = McDatesController;
        this.controllerAs = "$ctrl";
        this.template = `
          <div layout="column" flex="40" flex-offset="35" layout-align="center">           
                    <div layout="row">  
                           <div flex="33"  layout="column">с</div>  
                           <div flex="33" layout="column">по</div>     
                    </div> 
                    <div layout="row"> 
                           <div flex="30" layout="column">
                             <md-datepicker class="picker" ng-change="$ctrl.change()"  md-max-date="$ctrl._maxDate" ng-model="$ctrl.from" md-placeholder="Enter date from"></md-datepicker> 
                            </div>  
                           <div flex="30" layout="column">
                             <md-datepicker class="picker" ng-change="$ctrl.change()" md-min-date="$ctrl._minDate" ng-model="$ctrl.to" md-placeholder="Enter date to"></md-datepicker> 
                            </div>   
                    </div>                     
                    <div layout="row"    class="mc-dates-links"> 
                       <a   ng-click="$ctrl.setDate('yesterday')" href="">Вчера</a>
                       <a flex-offset="5"  ng-click="$ctrl.setDate('today')" href="">Сегодня</a>
                       <a flex-offset="5" ng-click="$ctrl.setDate('two_weeks')" href="">2 недели</a>
                       <a flex-offset="5" ng-click="$ctrl.setDate('month')" href="">Месяц</a>
                       <a flex-offset="5"  ng-click="$ctrl.setDate('all')" href="">Все</a>
                    </div> 
               <style>
               .picker .md-datepicker-button {
                  display: none;
                }
               .mc-dates-links{
                    font-size: 12px;
               }
               </style>                                        
          </div>    
        `;
        this.bindings = {
            "dateFrom": "=",
            "dateTo": "=",
            "mcChange": "&"
        };
        this.require = {}
    }

}

angular.module("mcDatesModule", ["ngMaterial"])
    .config(($mdDateLocaleProvider) => {

        $mdDateLocaleProvider.formatDate = function (date) {
            let m = moment(date);
            if (m.isValid())
                return m.format("DD.MM.YYYY");
            return ""
        };

        $mdDateLocaleProvider.parseDate = function (stringDate) {
            return new Date(stringDate)
        }
    })
    .component("mcDates", new McDatesComponent());