(function() {
    'use strict';

    angular
        .module('app')
        .factory('swFactory', swFactory);

    swFactory.$inject = ['$http'];

    /* @ngInject */
    function swFactory($http) {
        var service = {
            swSearch: swSearch,
        };

        return service;

        function swSearch() {
            return $http.get('http://swapi.co/api/people')
              .then(function(response) {
                return response.data;

              });
        }
    }
})();
