$(function () {
  $('.slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="22" height=""><use xlink: href="images/result/sprite/sprite.svg#left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="22" height=""><use xlink: href="images/result/sprite/sprite.svg#right"></use></svg></button>'
  });
});