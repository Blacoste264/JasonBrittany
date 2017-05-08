(function() {
  'use strict';

  angular
    .module('app')
    .controller('NfcController', NfcController);

  NfcController.$inject = ['swFactory'];

/* When button is clicked, have Yoda Modal appear function */
  $(function() {
    $('#submitButton').on('show.bs.modal', function() {
      var submitButton = $(this);
      clearTimeout(submitButton.data('hideInterval'));
      submitButton.data('hideInterval', setTimeout(function() {
        submitButton.modal('hide');
      }, 3000));
    });
  });
  /* Hide divs containg fighters when page loads */
  $(document).ready(function() {
    $('#showHide').hide();
  });
  /* Show fighter when button is clicked */
  $("#chooseFighterButton").click(function() {
    $("#showHide").fadeIn(8000);
});
$("#chooseFighterButton").click(function() {
  $("#chooseFighterButton").fadeOut(1000);
});
$("#chooseFighterButton").click(function() {
  $("#instructions").fadeOut(1000);
});
$("#chooseFighterButton").click(function() {
  $("#secondInstructions").slideDown(5000);
});
/* Hide NFC and gif at beginning then fade in */
    $('div.hidden').fadeIn(5000).removeClass('hidden');

  /* Select random fighter function */
  function NfcController(swFactory) {
    var vm = this;
    vm.findSWFighters = findSWFighters;

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
