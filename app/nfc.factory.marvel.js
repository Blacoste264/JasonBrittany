(function() {
    'use strict';

    angular
        .module('app')
        .factory('marvelFactory', marvelFactory);

    marvelFactory.$inject = ['$http'];

    /* @ngInject */
    function marvelFactory($http) {
        var service = {
            marvelSearch: marvelSearch,
        };

        return service;

        function marvelSearch(term) {
            return $http.get('http)
              .then(function(response) {
                return response.data;

              });
        }
    }
})();
