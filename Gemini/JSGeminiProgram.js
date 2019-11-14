window.onload = function(){
  goToDiv(localStorage.getItem('div'));
  localStorage.clear();
}


function makeExplanationAppear(divName) {
  document.getElementById(divName).style.display = "block";
}

function makeExplanationDisappear(divName) {
  document.getElementById(divName).style.display = "none";
}


/*burger menu */
let navWrapper = document.querySelector('.nav-wrapper');
let  navToogler =  document.querySelector('.nav-toogler');

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active');
});

function goToDiv(divID) {
  $('html,body').animate( {
    scrollTop:
    $(divID).offset().top
  }, 1500);
}
