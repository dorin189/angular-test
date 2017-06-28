
angular.module('myApp.cars',[

])
    .service('CarsModel', function ($translate, $http) {

        var model = this,
            URL = {
               FETCH: 'data/cars.json'
            },
            cars;

        model.getCars = function () {
            return $http.get(URL.fetch);
        };
    });