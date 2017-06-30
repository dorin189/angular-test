
angular.module('myApp.add-car-service',[

])
    .factory('Scopes', function () {
        var mem = {};

        return {
            store: function (key, value) {
                mem[key] = value;
            },
            get: function (key) {
                return mem[key];
            }
        };

    });

