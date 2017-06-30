
angular.module('myApp.view11', [])
    .directive('allCards', function () {
        return {
            restrict: 'E',
            templateUrl: '/components/view1/all-cards/all-cards.html'
        }

    });