$(document).ready(function () {
  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".scroll").smoothScroll({
    speed: 1000,
  });

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".header-menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
});

$(".select-wrap select").select2({
  minimumResultsForSearch: 6,
})

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 1,
          focusOnSelect: true,
        },
      },
    ],
  });
  
  $(".cozy-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $(".cozy-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".cozy-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });

  $(".samal-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $(".samal-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".samal-slider-wrap2 .slider-navigation .slick-next"),
  });



  $('.tabs').each(function() {
    var $tabs = $(this);

    // Открытие первой вкладки по умолчанию и инициализация слайдера внутри неё
    $tabs.find('.tab-links li:first').addClass('active');
    $tabs.find('.tab-content .tab-pane:first').addClass('active');

    var firstTabSlider = $tabs.find('.tab-content .tab-pane:first .samal-slider');
    if (firstTabSlider.length) {
        firstTabSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-prev"),
            nextArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-next"),
        });
    }

    // Обработчик клика по вкладкам
    $tabs.find('.tab-links a').click(function(e) {
        e.preventDefault();

        var $link = $(this);
        var target = $link.attr('href');

        // Переключаем вкладки
        $tabs.find('.tab-links li').removeClass('active');
        $link.parent().addClass('active');

        // Переключаем контент вкладок
        $tabs.find('.tab-content .tab-pane').removeClass('active');
        $tabs.find(target).addClass('active');

        // Инициализация Slick для слайдера внутри активной вкладки
        var $slickSlider = $tabs.find(target).find('.samal-slider');

        if ($slickSlider.length) {
            if ($slickSlider.hasClass('slick-initialized')) {
                $slickSlider.slick('unslick');
            }

            $slickSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                prevArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-prev"),
                nextArrow: $tabs.find(".samal-slider-wrap .slider-navigation .slick-next"),
            });
        }
    });
});


$(document).ready(function() {
  // Инициализация слайдера
  function initializeSlider(target) {
      var $slickSlider = $(target).find('.map-slider');
      
      if (!$slickSlider.hasClass('slick-initialized')) {
          $slickSlider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
          });
      }
  }

  // Переключение вкладок
  $('.tab-links2 a').click(function(e) {
      e.preventDefault();

      var target = $(this).attr('href');

      // Переключаем вкладки
      $('.tab-links2 li').removeClass('active');
      $(this).parent().addClass('active');

      // Переключаем контент вкладок
      $('.tab-content .tab-pane2').removeClass('active');
      $(target).addClass('active');

      // Инициализация слайдера внутри выбранной вкладки
      initializeSlider(target);
  });

  // Открытие первой вкладки по умолчанию и инициализация слайдера
  $('.tab-links2 li:first').addClass('active');
  $('.tab-content2 .tab-pane2:first').addClass('active');
  initializeSlider('#tab1'); // Инициализируем слайдер для первой вкладки
});

$(".tab-menu li a").on("click", function (e) {
  e.preventDefault();
  $(this).closest(".tab-menu").find("li").removeClass("active");
  $(this).closest("li").addClass("active");
  var index = $(this).closest("li").index();
  $(".tab-content-item").removeClass("active");
  $(".tab-content-item").eq(index).addClass("active");
});


$(".map-info-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease-in-out",
  speed: 800,
});

$(".info-slider").each(function () {
  $(this).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    speed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });
});

$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});


  AOS.init();
});
