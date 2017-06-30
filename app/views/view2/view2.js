'use strict';

angular.module('myApp.view2', [])

  .controller('View2Ctrl', function (CarsModel, $stateParams) {

      var view2Ctrl = this;
      view2Ctrl.obiect = $stateParams.carId;


      CarsModel.getCars()
          .then(function (result) {
              view2Ctrl.car = result.data[view2Ctrl.obiect-1];
          });





  });