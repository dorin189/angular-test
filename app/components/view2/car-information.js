
angular.module('myApp.carInfo', [])
    .directive('carInformation', function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/components/view2/car-information.html',
            controller: 'View2Ctrl as view2Ctrl'
        }

    });