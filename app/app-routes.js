(function () {
    'use strict';
})();

angular.module('myApp.routes', [])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
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
                        controller: 'ViewCtrl as viewCtrl',
                        templateUrl: 'views/view1/view1.html'

                    }
                }
            })

            .state('web.view2', {
                url: '/car/{id}',
                views: {
                    'car@': {
                        controller: 'View2Ctrl as view2Ctrl',
                        templateUrl: 'views/view2/view2.html'
                    }
                }
            })


            .state('web.view3', {
                url: '/add',
                views: {
                    'add@': {
                        controller: 'View3Ctrl as view3Ctrl',
                        templateUrl: 'views/view3/view3.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);
