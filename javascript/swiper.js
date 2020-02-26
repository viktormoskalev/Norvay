    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        640:{
          slidesPerView: 2,
          spaceBetween: 30,
                 autoplay: {
    delay: 2000,
  },
        },
        1048: {
          slidesPerView: 3,
          spaceBetween: 20,
        },        
        1440: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesOffsetBefore: 280,
        }, 
                1640: {
          slidesPerView: 4,
          spaceBetween: 50,
          slidesOffsetBefore: 280,
        }, 
      }
    });

    var swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
       autoplay: {
    delay: 4000,
  },
            navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
      },
      breakpoints: {
        640:{
          slidesPerView: 2,
          spaceBetween: 30,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 20,
        },        
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }
    });
