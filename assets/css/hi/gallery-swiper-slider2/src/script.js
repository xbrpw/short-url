var galleryTop = new Swiper(".gallery-top", {
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  spaceBetween: 10,
  loop:true,
  loopedSlides: 50
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: "auto",
  touchRatio: 0.2,
  loop:true,
  slideToClickedSlide: true,
  loopedSlides: 50,
  direction:'vertical'
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;