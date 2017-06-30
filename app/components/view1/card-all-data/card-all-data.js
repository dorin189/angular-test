
angular.module('myApp.view12', [])
    .directive('cardAllData', function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/components/view1/card-all-data/card-all-data.html',
            controller: 'ViewCtrl as viewCtrl',
        }

    });