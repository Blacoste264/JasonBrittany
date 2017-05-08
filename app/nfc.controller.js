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
      }, 1000));
    });
  });

  //---------------------Jquery effects----------------
  /* Hide divs containg fighters when page loads */
$(document).ready(function() {
  $('#showHide').hide();
});
/* Show fighter when button is clicked */
$("#chooseFighterButton").click(function() {
  $("#showHide").fadeIn(8000);
});
/* Gets rid of button display */
$("#chooseFighterButton").click(function() {
  $("#chooseFighterButton").fadeOut(1000);
});
/* Gets rid of first instructions */
$("#chooseFighterButton").click(function() {
  $("#instructions").fadeOut(1000);
});
/* Displays new instructions */
$("#chooseFighterButton").click(function() {
  $("#secondInstructions").fadeIn(1000);
});
// if left button is clicked, right will fade
$("#leftPictureButton").click(function() {
  $("#rightRow").fadeOut(1000);
});
// if right button is clicked, left will fade
$("#rightPictureButton").click(function() {
  $("#leftRow").fadeOut(1000);
});
$("#leftPictureButton").click(function() {
  $("#secondInstructions").fadeOut(.1);
});
$("#leftPictureButton").click(function() {
  $("#thirdInstructions").fadeIn(1000);
});
$("#rightPictureButton").click(function() {
  $("#secondInstructions").fadeOut(.1);
});
$("#rightPictureButton").click(function() {
  $("#thirdInstructions").fadeIn(1000);
});
/* Hide NFC andgif at beginning then fade in */
$('div.hidden').fadeIn(5000).removeClass('hidden');
//-------------End of Jquery Effects-----------

  /* Select random fighter function */
  function NfcController(swFactory) {
    var vm = this;
    vm.findSWFighters = findSWFighters;

    function findSWFighters() {
      swFactory
        .swSearch()
        .then(function(data) {
          vm.results = data;
          vm.randomFighter1 = vm.results[Math.floor(Math.random() * vm.results.length)];
          vm.randomFighter2 = vm.results[Math.floor(Math.random() * vm.results.length)];
        });
      }
    }
})();
