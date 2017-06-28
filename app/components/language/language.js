
angular.module('heroApp', [])
    .directive('heroDetail', function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/components/language/language.html',
            controller: 'MainCtrl',
        }

    });