$(document).ready(function(){


  // Check for cookie and store if none on accept


  if (document.cookie == ""){
    $('.disclaimer').fadeIn();
    $('main').addClass('no-scroll');
  }

  // On accepting the disclaimer hide the overlay
  // and remove class from main that prevents scrolling

  $('.disclaimer').submit(function(event){
    event.preventDefault();
    window.scrollTo(0, 0);
    var value = $('#residence').val()
    if (value == 'switzerland'){

      // Set cookie

      document.cookie = "country=switzerland";

      $('.terms-overlay-wrapper').fadeOut();
      $('main').removeClass('no-scroll');

      (function(a, b, c, d) {
            a = 'https://tags.tiqcdn.com/utag/vontobel/main/prod/utag.js';
            b = document;
            c = 'script';
            d = b.createElement(c);
            d.src = a;
            d.type = 'text/java' + c;
            d.async = true;
            a = b.getElementsByTagName(c)[0];
            a.parentNode.insertBefore(d, a);
        })();
    } else {
      window.location = 'https://www.vontobel.com/';
    }
  })


  //  Headroom (navbar hide and show on scroll)

  // grab an element
  var myElement = document.querySelector("header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();

  $('.navbar-toggler').on('click', function(){
    $('.navbar').toggleClass('navbar-background');
  })

  // Start and stop carousel depending on the screen width

  $(window).resize(function() {
    if ($(window).width() < 1440){
      $('#firstCarousel').carousel();
    }
    else {
      $('#firstCarousel').carousel('pause');
    }
  })

  // 3 items per slide

  $('.carousel').on('slide.bs.carousel', function (e) {

      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              }
              else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
  });


  // Smooth scroling

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Open menu while hidden on small screens

  $('.nav-open').click(function(event){
    event.preventDefault();
    $(this).toggleClass('change');
    $('.nav-drop').toggleClass('show');
  })

  // Set nav height

  h = $(window).height() - $('header').height();
  $('.nav-drop').height(h);

  // Header change background on options dropdown

  $('a[href="#options"]').click(function(event){
    $('header').toggleClass('header-white');
    if ($(this).data('col') === 'languages') {
      $('.languages-col').toggleClass('active')
    } else if ($(this).data('col') === 'login') {
      $('.login-col').toggleClass('active')
    } else setTimeout(function(){
      $('.active').removeClass('active')
    }, 400)
  });


  // Show correct dialog on 'More information' in circle section

  $('.circle-point').click(function(event){
    event.preventDefault();

    var href = $(this).attr('href');
    $('.point-information').hide();
    $(href).fadeIn();

    $('.point-icon').removeClass('active');
    $(this ).find('.point-icon').addClass('active');

  })


    // Close any overlay form

    var openedForm;
    $('.close-form').click(function(event){
      event.preventDefault();
      form[0].reset();
      openedForm.fadeOut();
    })

  // Show register form

    $('.register').click(function(event){
      event.preventDefault();
      $('.register-form').fadeIn();
      openedForm = $('.register-form');
      form = $('.register-form form');
    })

  // Show demo form

  $('.demo').click(function(event){
    event.preventDefault();
    $('.demo-form').fadeIn();
    openedForm = $('.demo-form');
    form = $('.register-form form');
  })


    // Designation select show right options

    $('.legal').click(function(event){
      event.preventDefault();
      $('.btn-designation.selected').removeClass('selected');
      $(this).addClass('selected');
      $('.select-authority').hide();
      $('.select-legal').show();
    })

    $('.authority').click(function(event){
      event.preventDefault();
      $('.btn-designation.selected').removeClass('selected');
      $(this).addClass('selected');
      $('.select-legal').hide();
      $('.select-authority').show();
    })

    // On submit register form

    $('.register-form').submit(function(event){
      event.preventDefault();

      var m = []; // Success message

      lang = document.documentElement.lang;
      m['de'] = 'Vielen Dank, die Unterlagen werden Ihnen zugeschickt';
      m['en'] = '';       //
      m['it'] = '';       //   Add messages for other languages
      m['fr'] = '';       //

      $('#register-submit').addClass('btn-success disabled').removeClass('btn-primary');
      $('#register-submit').html('<i class="fas fa-check mr-3"></i>' + m[lang]);
    })

    // On collapse, hide already collapsed items


    $('.collapse-toggle').on('click', function(){
        $('.collapse-toggle.opened').not(this).removeClass('opened');
        $('.collapse.show').collapse('hide');
        $(this).toggleClass('opened');
    })


    // Validate forms bootstrap custom

    var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });

})
