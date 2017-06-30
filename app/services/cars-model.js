
angular.module('myApp.cars',[

])
    .service('CarsModel', function ($http) {
        var model = this,
            URLS = {
               FETCH: '/data/cars.json'
            },
            cars;

        model.getCars = function () {
            return $http.get(URLS.FETCH);
        }


    });