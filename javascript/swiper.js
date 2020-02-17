    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640:{
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1048: {
          slidesPerView: 3,
          spaceBetween: 20,
        },        
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
          slidesOffsetBefore: 250,
        },
      }
    });
