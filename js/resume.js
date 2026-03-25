(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// Profilbild Funktion:
var description = [
  "img/profile_1.jpg",
  "img/profile_2.jpg"
];

var size = description.length;
$('.item img').each(function() {
  var x = Math.floor(size * Math.random()); //move random inside loop
  if ($(this).hasClass("portrait_img")) { //replace "img" with "this"
    $(this).attr("src", description[x]);
  }
});

$('.item img').click(function () {
  if($('.item img').attr("src") == "img/profile_1.jpg") {
     $('.item img').attr("src", "img/profile_2.jpg");
  }
  else {
    $('.item img').attr("src", "img/profile_1.jpg");
  }
});
// Portfolio-Galerie Funktion:

function ueberblenden(fadevar) {
  $('#portfolioModal' + fadevar).addClass('fade');
}

function weiter(fenster) {
    fenster1 = fenster;
    fenster2 = parseInt(fenster)+1;
    fenster2 = String(fenster2);
      for(avar=0;avar<22;avar++){
        $('#portfolioModal' + avar).removeClass('fade');
      }
      $('#portfolioModal' + fenster1).modal('hide');
      $('#portfolioModal' + fenster2).modal('show');
  }

function zurueck(fenster) {
    fenster1 = fenster;
    fenster2 = parseInt(fenster)-1;
    fenster2 = String(fenster2);
      for(avar=0;avar<22;avar++){
        $('#portfolioModal' + avar).removeClass('fade');
      }
      $('#portfolioModal' + fenster1).modal('hide');
      $('#portfolioModal' + fenster2).modal('show');
  }
  function UnCryptMailto( s )
      {
          var n = 0;
          var r = "";
          for( var i = 0; i < s.length; i++)
          {
              n = s.charCodeAt( i );
              if( n >= 8364 )
              {
                  n = 128;
              }
              r += String.fromCharCode( n - 1 );
          }
          return r;
      }

      function linkTo_UnCryptMailto( s )
      {
          location.href=UnCryptMailto( s );
      }
