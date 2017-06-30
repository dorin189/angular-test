/**
 * Created by doriniosifescu on 28/06/2017.
 */
'use strict';

angular.module('myApp.view3', [])

    .controller('View3Ctrl', function($scope, $mdDialog, Scopes) {

        Scopes.store('View3Ctrl', $scope);

        $scope.variable1 = "Three";

        $scope.showAlert = function(ev) {
            $mdDialog.show({
                    templateUrl: '/../../components/view3/pop-up.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    scope: $scope,
                    preserveScope: true
            });
        };


        //dummy data to insert a car
        $scope.newCar = {
            title: "VW Golf",
            price: 12000,
            wiki: "https://en.wikipedia.org/wiki/Volkswagen_Golf_Mk5",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2007_Volkswagen_Golf_%281K_MY07%29_Sportline_2.0_TDI_5-door_hatchback_%282010-07-05%29.jpg/1200px-2007_Volkswagen_Golf_%281K_MY07%29_Sportline_2.0_TDI_5-door_hatchback_%282010-07-05%29.jpg",
            description: "The Volkswagen Golf Mk5 (codenamed Typ 1K) is a compact car, the fifth generation of the Volkswagen Golf and the successor to the Volkswagen Golf Mk4. Built on the Volkswagen Group A5 (PQ35) platform, it was unveiled at the Frankfurt Motor Show in October 2003 and went on sale in Europe one month later.[4] A compact MPV version of the car was produced as the Golf Plus."
        };

        function createCar(newCar) {
            Scopes.get('ViewCtrl').createCar(newCar);
            $mdDialog.hide();
        }

        $scope.createCar = createCar;

    });