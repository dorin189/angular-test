
(function(){
    'use strict';
})();

angular.module('myApp.i18n',[])
    .config(['$translateProvider',function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/locale-',
            suffix: '.json'
        });


        $translateProvider.preferredLanguage('en');

        $translateProvider.fallbackLanguage('en');

        // remember language
        $translateProvider.useLocalStorage();
        $translateProvider.useSanitizeValueStrategy(null);
    }])

.controller('MainCtrl', ['$translate', '$scope','$http', function ($translate, $scope, $http) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        console.log("ok");
    };

    $http.get('data/cars.json')
        .then(function (res) {
            $scope.todos = res.data;
        });
}]);


