// JAVASCRIPT START

$(function () {
  $(".banner-slider").slick({
    dots: true,
    speed: 500,
    fade: true,
    prevArrow: false,
    nextArrow: false,
  });
  $(".main-slider").slick({
    dots: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    speed: 300,
    slidesToShow: 1,
  });
  // $(".investor-wrapper").slick({
  //   centerMode: true,
  //   centerPadding: "60px",
  //   slidesToShow: 5,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });
});
