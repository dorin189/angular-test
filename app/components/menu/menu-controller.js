'use strict';

angular.module('myApp.language2', [])
    .controller('MenuCtrl', ['$translate', '$scope','$mdDialog',function ($translate, $scope, $mdDialog) {

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .textContent('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };

    }]);
