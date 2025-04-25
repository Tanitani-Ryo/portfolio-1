const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    breakpoints: { // ブレークポイント
  
        1025: { // 画面幅1025px以上で適用
        slidesPerView: 2,
        spaceBetween: 8,
      }
    },
  });
  
