'use strict';

angular.module('myApp.view1', [])
    .controller('ViewCtrl', function (CarsModel, $scope, $state, Scopes) {

        Scopes.store('ViewCtrl', $scope);

        var viewCtrl = this;
        CarsModel.getCars()
            .then(function (result) {
                viewCtrl.cars = result.data;
            });

        $scope.show = false;


        $scope.viewMore = function (car) {
            $scope.car = car;
            var carId = car.id;
            $state.go('web.view2', {carId});
        };


        $scope.removeItem = function (item) {
            console.log(item);
            var newCar = {};
            angular.forEach(viewCtrl.cars, function (value, key) {
                if (value != item)
                    newCar[key] = value;
            });
            viewCtrl.cars = newCar;
        };

        function createCar(newCar) {
            newCar.id = viewCtrl.cars.length + 1;
            viewCtrl.cars.push(newCar);
            console.log(newCar.id);
        }

        $scope.createCar = createCar;

    });

