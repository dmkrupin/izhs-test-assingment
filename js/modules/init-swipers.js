const mainSwiperNextButtonElements = document.querySelectorAll('.main-swiper__next');

const initMainSwiper = () => {
  let mainSwiper = new Swiper('.main-swiper', {
    spaceBetween: 50,
    direction: 'vertical',
    pagination: {
      el: '.main-swiper__pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"><span class="pagination-number">0${index + 1}</span></span>`;
      },
    },
  });

  for (let el of mainSwiperNextButtonElements) {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      mainSwiper.slideNext();
    });
  }
};

//   // Навешиваем переключение слайдов по нажатию мышкой на кнопки
//   reviewsSwiperPrevSlideButton.addEventListener('click', () => {
//     reviewsSwiper.slidePrev();
//   });

//   reviewsSwiperNextSlideButton.addEventListener('click', () => {
//     reviewsSwiper.slideNext();
//   });

//   // Навешиваем переключение слайдов по нажатию Enter на кнопке
//   reviewsSwiperPrevSlideButton.addEventListener('keydown', (evt) => {
//     if (evt.keyCode === 13) {
//       reviewsSwiper.slidePrev();
//     }
//   });

//   reviewsSwiperNextSlideButton.addEventListener('keydown', (evt) => {
//     if (evt.keyCode === 13) {
//       reviewsSwiper.slideNext();
//     }
//   });
// };


export const initSwipers = () => {
  initMainSwiper();
  // initTrainersSwiper();
};
