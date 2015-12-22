$(document).ready(function(){
  "use strict";

  // Total: 13.
  var countries = [
    {
      name: "belgium",
      img: "img/countries/belgium.png"
    },
    {
      name: "bulgaria",
      img: "img/countries/bulgaria.png"
    },
    {
      name: "canada",
      img: "img/countries/canada.png"
    },
    {
      name: "denmark",
      img: "img/countries/denmark.png"
    },
    {
      name: "england",
      img: "img/countries/england.png"
    },
    {
      name: "france",
      img: "img/countries/france.png"
    },
    {
      name: "gibraltar",
      img: "img/countries/gibraltar.png"
    },
    {
      name: "ireland",
      img: "img/countries/ireland.png"
    },
    {
      name: "macedonia",
      img: "img/countries/macedonia.png"
    },
    {
      name: "netherlands",
      // To change.
      img: "img/countries/ireland.png"
    },
    {
      name: "poland",
      img: "img/countries/poland.png"
    },
    {
      name: "ukraine",
      img: "img/countries/ukraine.png"
    },
    {
      name: "usa",
      img: "img/countries/usa.png"
    }
  ];

  function createSlides() {
    var container = document.getElementsByClassName('owl-carousel')[0];
    var frag = document.createDocumentFragment();

    countries.forEach(function(country) {
      var el = document.createElement('div');
      var elTop = document.createElement('div');
      var elBottom = document.createElement('div');

      el.setAttribute('data-hash', country.name);
      el.className = 'item' + ' ' + country.name;
      elTop.style.cssText = "background-image: url(" + country.img + ")";
      elTop.className = 'top';
      elBottom.className = 'bottom';

      el.appendChild(elTop);
      el.appendChild(elBottom);
      frag.appendChild(el);
    });

    container.appendChild(frag);
  }
  createSlides();

  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
  }
  else {
    var hash = "ukraine";
  }

  var startPosition;
  $(countries).each(function (index) {
    if (hash === this.name) {
      startPosition = index;
    }
    $("#control-link-wrap tsapn#" + hash).attr("class", "active");
  });

  var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    startPosition: startPosition,
    URLhashListener: true,
    animateIn: "rollIn",
    animateOut: "rollOut",
  });

  owl.on('changed.owl.carousel', function(event) {
    $(".owl-carousel .item .top").removeClass('animated bounceInLeft');
    $(".owl-carousel .item .top").each(function(index) {
      if (index == event.item.index) {
        $(this).addClass('animated bounceInLeft');
      }
    });
  });

  $("#control-link-wrap tspan").on("click", function(e) {
    $(e.target).siblings().attr("class", "");
    $(e.target).attr("class", "active");
    window.location.hash = "#" + $(e.target).attr("data-country");
  });

  $(document).snowfall({image: "img/snowflake_32.png", minSize: 10, maxSize:32});
});

$(window).load(function () {
  document.getElementById("bg-song").play();
  $(".snowman").fadeOut();
  $(".owl-carousel .owl-item.active .item .top").addClass('animated rollIn');
});
