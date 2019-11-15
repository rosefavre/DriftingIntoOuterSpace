$(document).ready(function(){


    $('#gemini').click(function(event){
        event.stopPropagation();
        $("#menuderoulant").show(400);
    });

    $("body").click(function(){
        $("#menuderoulant").hide(400);
    });

});



function makeExplanationAppear(divName) {
  document.getElementById(divName).style.display = "block";
  if(divName == "expApollo11") {
    document.getElementById("videoapollo").play();
  }
}

function makeExplanationDisappear(divName) {
  document.getElementById(divName).style.display = "none";
  if(divName == "expApollo11") {
      document.getElementById("videoapollo").pause();
  }
}

function goToDiv(divID) {
  $('html,body').animate( {
    scrollTop:
    $(divID).offset().top
  }, 1500);
}


/*burger menu */
let navWrapper = document.querySelector('.nav-wrapper');
let  navToogler =  document.querySelector('.nav-toogler');

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active');
});
