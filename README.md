# mcDates

#### For demo 
```
npm i
```
Open index.html in browser

#### Usage example
```
angular.module('App', ["mcDatesModule"])
    .controller('AppController', ['$scope', function ($scope) {
        $scope.dateFrom = '';
        $scope.dateTo = '';
        $scope.onChangeDate = function () {
            alert("Date 1: " + $scope.dateFrom + " Date 2: " + $scope.dateTo)
        }

    }])
    
<mc-dates date-from="dateFrom" date-to="dateTo" mc-change="onChangeDate()"></mc-dates>
```
#### Required global to includes

```
<script src="node_modules/angular/angular.js"></script>
<script src="node_modules/angular-animate/angular-animate.js"></script>
<script src="node_modules/angular-aria/angular-aria.js"></script>
<script src="node_modules/angular-material/angular-material.js"></script>
<script src="node_modules/moment/moment.js"></script>
```
