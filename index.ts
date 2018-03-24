class McDatesController implements angular.IComponentController {
    [x: string]: any;

    change = () => {
        if (this.ctrl.mcChange !== undefined)
            this.ctrl.mcChange()
    }
    private FORMAT = "YYYY-MM-DD";

    constructor() {
        this.ctrl = this;
        this._from = moment().toDate();
        this._to = moment().toDate()
    }

    private _from;

    get from() {
        return this._from
    }

    set from(value) {
        let m = moment(value, this.FORMAT);
        this._from = m.toDate();
        this.ctrl.dateFrom = m.format(this.FORMAT)

    }

    private _to;

    get to() {
        return this._to
    }

    set to(value) {
        let m = moment(value, this.FORMAT);
        this._to = m.toDate();
        this.ctrl.dateTo = m.format(this.FORMAT)
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
          <div>          
                  с
                  <md-datepicker ng-change="$ctrl.change()"  md-max-date="$ctrl.to" ng-model="$ctrl.from" md-placeholder="Enter date from"></md-datepicker>                  
     
                  по
                  <md-datepicker ng-change="$ctrl.change()" md-min-date="$ctrl.from" ng-model="$ctrl.to" md-placeholder="Enter date to"></md-datepicker>            
                   
                 
          </div>
          <div>
           <a ng-click="$ctrl.change()" href="">Вчера</a>
           <a ng-click="$ctrl.change()" href="">Сегодня</a>
           <a ng-click="$ctrl.change()" href="">2 недели</a>
           <a ng-click="$ctrl.change()" href="">Месяц</a>
           <a ng-click="$ctrl.change()" href="">Все</a>
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

angular.module("mcDatesModule", ["ngMaterial", "ngAnimate", "ngAria", 'ngMessages'])
    .component("mcDates", new McDatesComponent());