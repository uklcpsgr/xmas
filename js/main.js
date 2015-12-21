$(document).ready(function(){
  "use strict";

  var initSlide = function() {
    var toyWraps = document.getElementsByClassName('toy-wrap');
    // Center slide index should be used.
    $(toyWraps[1]).removeClass('init');
  };

  var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    startPosition: 1,
    URLhashListener: true,
//    animateIn: "rollIn",
//    animateOut: "rollOut"
    animateIn: "rotateInUpLeft",
    animateOut: "rotateOutUpLeft"
//    onInitialized: initSlide,
  });
  
  owl.on('changed.owl.carousel', function(event) {
    var toyWraps = document.getElementsByClassName('toy-wrap');
    $(toyWraps).each(function() {
      $(this).addClass('init');
    });
    $(toyWraps[event.item.index]).removeClass('init');
  });


  var xMasSong = document.getElementById('bg-song');
  xMasSong.addEventListener("canplay", function(e) {
//    e.target.play();
    initSlide();
    $(".snowman").fadeOut();
  });
});
