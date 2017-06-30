

angular.module('myApp.add', [])
    .directive('addCar', function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/components/view3/add-new-car.html',
            controller: 'View3Ctrl as view3Ctrl'
        }

    });