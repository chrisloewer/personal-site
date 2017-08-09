
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
    var breakpoint = 300;
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

  // TODO handle the disappearing url nav bar on mobile devices
  // Override resize of above-fold content for mobile devices - due to hiding url bar
  // $('#intro-content').css({ height: $(window).height() + 100 });
  // $('#intro-header').css({ height: $(window).height() + 100 });

});
