$(function () {

  $('.menu__btn').on('click', function() {
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