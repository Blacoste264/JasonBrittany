(function() {
  'use strict';

  angular
    .module('app')
    .controller('NfcController', NfcController);

  NfcController.$inject = ['swFactory'];

//------------Bootstrap Modal Yoda Loading-----------
  $(function() {
    $('#submitButton').on('show.bs.modal', function() {
      var submitButton = $(this);
      clearTimeout(submitButton.data('hideInterval'));
      submitButton.data('hideInterval', setTimeout(function() {
        submitButton.modal('hide');
      }, 3000));
    });
  });

  //----------Jquery hide heading effects----------
$(document).ready(function() {
  $('#showHide').hide();
});
/* Hide NFC andgif at beginning then fade in */
$('div.hidden').fadeIn(3000).removeClass('hidden');

//------------Actions when button is clicked!----------
// Show fighter when button is clicked
$("#chooseFighterButton").click(function() {
  $("#showHide").fadeIn(8000);
});
// Gets rid of button display
$("#chooseFighterButton").click(function() {
  $("#chooseFighterButton").fadeOut(1000);
});
 // Gets rid of first instructions
$("#chooseFighterButton").click(function() {
  $("#instructions").fadeOut(1000);
});
// Displays new instructions
$("#chooseFighterButton").click(function() {
  $("#secondInstructions").fadeIn(1000);
});

//---------Left button----------
// if left button is clicked, right will fade
$("#leftPictureButton").click(function() {
  $("#rightRow").fadeOut(1000);
});
// left picture button clicked, "choose fighter" text will fade
$("#leftPictureButton").click(function() {
  $("#secondInstructions").fadeOut(.1);
});
// left picture button clicked, "winner" appears
$("#leftPictureButton").click(function() {
  $("#thirdInstructions").fadeIn(1000);
});

//-------Right button----------
// if right button is clicked, left will fade
$("#rightPictureButton").click(function() {
  $("#leftRow").fadeOut(1000);
});
// right picture button clicked, "choose fighter" text will fade
$("#rightPictureButton").click(function() {
  $("#secondInstructions").fadeOut(.1);
});
// right picture button clicked, "winner" appears
$("#rightPictureButton").click(function() {
  $("#thirdInstructions").fadeIn(1000);
});
//-------------End of Jquery Effects-----------


//------ Select random fighter function-------- 
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
