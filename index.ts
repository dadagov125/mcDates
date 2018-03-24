class McDatesController implements angular.IComponentController {
    [x: string]: any;
    private FORMAT = "YYYY-MM-DD";
    private _from: Date;
    private _to: Date;

    constructor(private $scope: angular.IScope) {

        $scope.$watch(() => this.dateFrom, (newValue, oldValue) => {
            let m = moment(newValue, this.FORMAT);
            if (m.format(this.FORMAT) === newValue) {
                this.from = m.toDate()
            }
        });

        $scope.$watch(() => this.dateTo, (newValue, oldValue) => {
            let m = moment(newValue, this.FORMAT);
            if (m.format(this.FORMAT) === newValue) {
                this.to = m.toDate()
            }
        })
    }

    get from() {
        return this._from
    }

    set from(value) {
        if (value == null) {
            this._from = undefined;
            this.dateFrom = value;
            return
        }
        let m = moment(value, this.FORMAT);
        this._from = m.toDate();
        this.dateFrom = m.format(this.FORMAT)

    }


    get to() {
        return this._to
    }

    set to(value) {
        if (value == null) {
            this._to = undefined;
            this.dateTo = value;
            return
        }
        let m = moment(value, this.FORMAT);
        this._to = m.toDate();
        this.dateTo = m.format(this.FORMAT)
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
                             <md-datepicker class="picker" ng-change="$ctrl.change()"  md-max-date="$ctrl.to" ng-model="$ctrl.from" md-placeholder="Enter date from"></md-datepicker> 
                            </div>  
                           <div flex="30" layout="column">
                             <md-datepicker class="picker" ng-change="$ctrl.change()" md-min-date="$ctrl.from" ng-model="$ctrl.to" md-placeholder="Enter date to"></md-datepicker> 
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
    .component("mcDates", new McDatesComponent());