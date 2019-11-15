
//submenu gemini
$(document).ready(function(){


    $('#gemini').click(function(event){
        event.stopPropagation();
        $("#menuderoulant").show(400);
    });

    $("body").click(function(){
        $("#menuderoulant").hide(400);
    });

});

//counter before next nasa rocket launch
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 5, 2020 11:15:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + " days " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);


    /*burger menu */
    let navWrapper = document.querySelector('.nav-wrapper');
    let navToogler =  document.querySelector('.nav-toogler');

navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('active');
});


//go to a certain div
function goToDiv(divID) {
  $('html,body').animate( {
    scrollTop:
    $(divID).offset().top
  }, 1500);
}
