function timeTitleAppearance()
{
  setTimeout(titleAppearance(), 2000);
}

function titleAppearance()
{
    document.getElementById('titleMercury').innerHTML = "Mercury Program";
    document.getElementById('MercuryDates').innerHTML = "1958 - 1963";
}


/*burger menu */
let navWrapper = document.querySelector('.nav-wrapper');
let  navToogler =  document.querySelector('.nav-toogler');

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active');
});


/* animation button Tell me more */

function goToDiv(divID) {
  $('html,body').animate( {
    scrollTop:
    $(divID).offset().top
  }, 1500);
}


$(document).ready(function(){


    $('#gemini').click(function(event){
        event.stopPropagation();
        $("#menuderoulant").show(400);
    });

    $("body").click(function(){
        $("#menuderoulant").hide(400);
    });

});
