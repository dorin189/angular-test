'use strict';

angular.module('myApp.view1', [])
  .controller('ViewCtrl', function(CarsModel, $scope, $state) {


    var viewCtrl = this;
    CarsModel.getCars()
        .then(function (result) {
            viewCtrl.cars = result.data;
        });

      $scope.show = false;

      $scope.viewMore = function (id) {
          $state.go('web.view2', {id});
      };

      $scope.removeItem = function (item) {
          console.log(item);
          var newCar = {};
          angular.forEach(viewCtrl.cars, function (value, key) {
              if(value != item)
                  newCar[key] = value;
          });
          viewCtrl.cars = newCar;
      };



  });

