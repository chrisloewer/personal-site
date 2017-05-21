
function expandIntro() {
  $('#intro-content').addClass('open');
  $('#intro-header').addClass('open');
}

function collapseIntro() {
  $('#intro-content').removeClass('open');
  $('#intro-header').removeClass('open');
}

window.addEventListener('load', function () {

  function introController() {
    var breakpoint = 400;
    var currentPosition = getWindowScrollY();

    if(currentPosition > breakpoint) {
      expandIntro();
    }
    else {
      collapseIntro();
    }
  }

  window.addEventListener('scroll', introController, false);
  introController();

});


function getWindowScrollY() {
  if(window.scrollY !== undefined) {
    return window.scrollY;
  }
  else {
    return document.documentElement.scrollTop;
  }
}
