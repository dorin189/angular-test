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
            })

            .state('web.view1', {
                url: '/',
                views: {
                    'cars@': {
                        controller: 'View1Ctrl',
                        templateUrl: 'views/view1/view1.html',

                    }

                }

            });

        $urlRouterProvider.otherwise('/');
}]);
