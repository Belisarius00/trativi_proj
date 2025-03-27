$(function() {

    var lastSlide = 7;
    var currentSlide = 0 ;
    var delayBeforeAnimation;
    var slides = ["vinificacao", "filtracao", "estabilizacao-tartarica", "carbonatacao", "pasteurizacao", "enchimento-e-rotulagem", "cerveja-e-sidra", "processamento-de-frutas"];

    //console.log(currentSlide + 1);

    $("#number-current-slide").append(currentSlide + 1);
    $("#last-slide").append(lastSlide + 1);

    var addSlideClass = "div#" + slides[currentSlide];
    $(addSlideClass).addClass("scale");

    var fadeIn = "a#" + slides[currentSlide];
    $(fadeIn).addClass("appear");

    
    $(".prev").on("click", prevSlide);
    $(".next").on("click", nextSlide);

    function prevSlide() {
      
    $( "#number-current-slide" ).empty();


      var removeSlideClass = "div#" + slides[currentSlide];
      $(removeSlideClass).removeClass("scale");

      var fadeIn = "a#" + slides[currentSlide];
    $(fadeIn).removeClass("appear");


      clearTimeout(delayBeforeAnimation);
      delayBeforeAnimation = setTimeout(function() {
        if (currentSlide > 0) currentSlide = currentSlide - 1;
        else currentSlide = lastSlide;

        goToSlide();
      }, 200);
    }

    function nextSlide() {
      
      $( "#number-current-slide" ).empty();

      var removeSlideClass = "div#" + slides[currentSlide];
      $(removeSlideClass).removeClass("scale");

      var fadeIn = "a#" + slides[currentSlide];
    $(fadeIn).removeClass("appear");

     
      clearTimeout(delayBeforeAnimation);
      delayBeforeAnimation = setTimeout(function() {
        if (currentSlide < lastSlide) currentSlide = currentSlide + 1;
        else currentSlide = 0;

        goToSlide();
      }, 200);
      
    }

    function goToSlide() {

      console.log(currentSlide + 1);

      $("#number-current-slide").append(currentSlide + 1);

      var addSlideClass = "div#" + slides[currentSlide];
      $(addSlideClass).addClass("scale");

    var fadeIn = "a#" + slides[currentSlide];
    $(fadeIn).addClass("appear");


      var coordenadaParaOndeVai = currentSlide * -70
      var coordenadaParaOndeVaiLinks = currentSlide * -100

      $(".carousel").animate({
        "left": coordenadaParaOndeVai + "%"
      });

    }

    $('body').on('mousewheel', function(event) {
        if (event.deltaY < 0) nextSlide();
        else if (event.deltaY > 0) prevSlide();
    });

    $("body").keydown(function(e) {
      if (e.keyCode == 37) prevSlide();
      else if(e.keyCode == 39) nextSlide();
    });


    if ( $(window).width() <= 1023 ) {

      $("body, .carousel").swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') nextSlide();
      if (direction == 'right') prevSlide();
      },
      excludedElements: "label, button, input, select, textarea, .noSwipe, .menu-text, .hamburguer-wrapper",
      allowPageScroll:"vertical"

    });


  };
});