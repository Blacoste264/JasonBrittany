(function() {
    'use strict';

    angular
        .module('app')
        .factory('swFactory', swFactory);

    swFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function swFactory($http, $q) {
        var service = {
            swSearch: swSearch,
        };

        return service;

        function swSearch() {
          // research $q.all  https://docs.angularjs.org/api/ng/service/$q
          // research .reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example
          // research .concat https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example

          return $q.all([
            $http.get('http://swapi.co/api/people?page=1'),
            $http.get('http://swapi.co/api/people?page=2'),
            $http.get('http://swapi.co/api/people?page=3'),
          ])
            .then(function(responses) {
              // how do we turn that into one big array?

              return responses.reduce(function(acc, current) {
                return acc.concat(current.data.results);
              }, []);
            });
        }
    }
})();
