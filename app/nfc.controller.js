(function() {
    'use strict';

    angular
        .module('app')
        .controller('NfcController', NfcController);

    NfcController.$inject = ['NfcFactory'];

    /* @ngInject */
    function NfcController(NfcFactory) {
        var vm = this;



        function activate() {

        }
    }
})();
