
angular.module('myApp.carInfo', [])
    .directive('carInformation', function () {
        return {
            restrict: 'E',
            templateUrl: '/components/view2/car-information.html'
        }

    });