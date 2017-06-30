
angular.module('myApp.language', [])
    .directive('menuSelector', function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/components/menu/menu.html',
            controller: 'MenuCtrl'
        }

    });