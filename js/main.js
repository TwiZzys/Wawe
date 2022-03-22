$(function () {
  let mixer = mixitup('.gallery__content');
  $('.gallery__filter-btn').on('click', function () {
    $('.gallery__filter-btn').removeClass('gallery__filter-btn--active');
    $(this).addClass('gallery__filter-btn--active');
  });
});