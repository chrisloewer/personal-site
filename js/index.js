
function expandIntro() {
  $('#intro-content').addClass('open');
  $('#intro-header').addClass('open');
}

function collapseIntro() {
  $('#intro-content').removeClass('open');
  $('#intro-header').removeClass('open');
}

function getWindowScrollY() {
  if(window.scrollY !== undefined) {
    return window.scrollY;
  }
  else {
    return document.documentElement.scrollTop;
  }
}

window.addEventListener('load', function () {

  function introScrollController() {
    var breakpoint = 90;
    var currentPosition = getWindowScrollY();

    if(currentPosition > breakpoint) {
      expandIntro();
    }
    else {
      collapseIntro();
    }
  }

  window.addEventListener('scroll', introScrollController, false);
  introScrollController();
});
