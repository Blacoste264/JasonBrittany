(function() {
  'use strict';

  angular
    .module('app')
    .controller('NfcController', NfcController);

  NfcController.$inject = ['swFactory'];

  /* @ngInject */
  function NfcController(swFactory) {
    var vm = this;
    vm.findSWFighters = findSWFighters;

/*search random function*/


    function findSWFighters() {
      swFactory
        .swSearch()
        .then(function(data) {
          vm.results = data;
          vm.randomFighter = vm.results.results[Math.floor(Math.random() * vm.results.results.length)];

        });
    }
  }
})();
