$(function () {
  // при нажатии на кнопку scrollup
  $('.toTop').on('click', function (e) {
    e.preventDefault();
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
  $('.menu').on('click', 'a', function (e) {
    e.preventDefault();
    let cl = $(this).attr('href'),
      top = $(cl).offset().top;

    $('html,body').animate({
      scrollTop: top
    }, 1500)
  });
  $('.header__icon').on('click', function (e) {
    e.preventDefault();

    let cl = $(this).attr('href'),
    top = $(cl).offset().top;

    $('html,body').animate({
      scrollTop: top
    }, 1000)
  })
  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 500) {
      // то сделать кнопку scrollup видимой
      $('.toTop').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.toTop').fadeOut();
    }
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.blog-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500
  })

  $('.gallery__filter-btn').on('click', function () {
    $('.gallery__filter-btn').removeClass('gallery__filter-btn--active');
    $(this).addClass('gallery__filter-btn--active');
  });

  let mixer = mixitup('.gallery__content');
});