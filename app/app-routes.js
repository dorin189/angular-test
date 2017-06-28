(function(){
    'use strict';
})();

angular.module('myApp.routes',[])
    .config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');

        $stateProvider
            .state('web', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
}]);
