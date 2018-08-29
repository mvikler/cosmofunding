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


  // Smooth scroling

  $('.nav-drop a[href*="#"], .scroll-down-chevron')
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

  var h;
  console.log($(window).height());
  console.log($('header').height());
  h = $(window).height() - $('header').height();
  $('.nav-drop').height(h);

  // Expand languages on mobile

  $('.mobile-languages ul li:first').click(function(event){
    event.preventDefault();
    $('.mobile-languages ul').toggleClass('expanded');
  })

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

  // Benefits slider

  var slickActivated;

  function startSlider (w) {
    if (w.matches) {
      slickActivated = true;
      $('.benefitsSlider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          appendArrows: $('.benefitsControls.controls'),
          prevArrow: '<a href="#" role="button" class="btn-round btn-outline-primary mr-2" aria-label="Next"><i class="fas fa-chevron-left"></i></a>',
          nextArrow: '<a  href="#" role="button" class="btn-round btn-primary"><i class="fas fa-chevron-right"></i></a>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    }
    else {
      if (slickActivated) {
        $('.benefitsSlider').slick('unslick');
      }
    }
  }

  var w = window.matchMedia("(max-width: 1200px)")
  startSlider(w);
  w.addListener(startSlider);

  // Press slider

  $('.pressSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendArrows: $('.pressControls.controls'),
    prevArrow: '<a href="#" role="button" class="btn-round btn-outline-primary mr-2" aria-label="Next"><i class="fas fa-chevron-left"></i></a>',
    nextArrow: '<a  href="#" role="button" class="btn-round btn-primary"><i class="fas fa-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })


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
      $('form').each(function(){
        $(this)[0].reset();
      })
      openedForm.fadeOut();
    })

  // Show register form

    $('.register').click(function(event){
      event.preventDefault();
      $('.register-form').fadeIn();
      openedForm = $('.register-form');
      form = $('.register-form form');
      if ($(this).hasClass('register-investor')){
        $('#register-investor-tab').addClass('active');
        $('#register-issuer-tab').removeClass('active');
        $('#register-investor').addClass('active show');
        $('#register-issuer').removeClass('active show');
      }
      else {
        $('#register-issuer-tab').addClass('active');
        $('#register-investor-tab').removeClass('active');
        $('#register-issuer').addClass('active show');
        $('#register-investor').removeClass('active show');
      }
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

    $('.register-form form').submit(function(event){
      event.preventDefault();

      var m = []; // Success message

      lang = document.documentElement.lang;
      m['de'] = 'Vielen Dank, die Unterlagen werden Ihnen zugeschickt';
      m['en'] = 'Thank you, we will send you the relevant documents.';
      m['it'] = 'Grazie, vi invieremo i documenti.';
      m['fr'] = 'Merci, les documents vous seront envoyés.';

      $(this).find('#register-submit')
        .addClass('btn-success disabled')
        .removeClass('btn-primary')
        .html('<i class="fas fa-check mr-3"></i>' + m[lang])
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
