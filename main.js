

// jQuery(function() {
//   var appear = false;
//   var pagetop = $('#page_top');
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
//       if (appear == false) {
//         appear = true;
//         pagetop.stop().animate({
//           'right': '0px' //右から0pxの位置に
//         }, 300); //0.3秒かけて現れる
//       }
//     } else {
//       if (appear) {
//         appear = false;
//         pagetop.stop().animate({
//           'right': '-50px' //右から-50pxの位置に
//         }, 300); //0.3秒かけて隠れる
//       }
//     }
//   });
//   pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
//     return false;
//   });
// });


// scrollTop('page-top', 500);

// function scrollTop(elem,duration) {
//   let target = document.getElementById(elem);
//   target.addEventListener('click', function() {
//     let currentY = window.pageYOffset; 
//     let step = duration/currentY > 1 ? 10 : 100;
//     let timeStep = duration/currentY * step;
//     let intervalID = setInterval(scrollUp, timeStep);

//     function scrollUp(){
//       currentY = window.pageYOffset;
//       if(currentY === 0) {
//           clearInterval(intervalID);
//       } else {
//           scrollBy( 0, -step );
//       }
//     }
//   });
// }


    document.addEventListener("DOMContentLoaded", function () {
      const pageTop = document.getElementById("page-top");
      let appear = false;
    
      // スクロールイベントを監視
      window.addEventListener("scroll", function () {
        if (window.scrollY > 400) { // 400pxスクロールしたら
          if (!appear) {
            appear = true;
            pageTop.style.transition = "right 0.3s"; // 0.3秒のアニメーション
            pageTop.style.right = "0px"; // 右から0pxの位置に
          }
        } else {
          if (appear) {
            appear = false;
            pageTop.style.transition = "right 0.3s"; // 0.3秒のアニメーション
            pageTop.style.right = "-50px"; // 右から-50pxの位置に
          }
        }
      });
    });

    // scrollTop('page-top', 500);

    // function scrollTop(elem,duration) {
    //   let target = document.getElementById(elem);
    //   target.addEventListener('click', function() {
    //     let currentY = window.pageYOffset; 
    //     let step = duration/currentY > 1 ? 10 : 100;
    //     let timeStep = duration/currentY * step;
    //     let intervalID = setInterval(scrollUp, timeStep);
    
    //     function scrollUp(){
    //       currentY = window.pageYOffset;
    //       if(currentY === 0) {
    //           clearInterval(intervalID);
    //       } else {
    //           scrollBy( 0, -step );
    //       }
    //     }
    //   });
    // }

  // // クリックでTOPへスムーズスクロール
  // pageTopBtn.addEventListener("click", function () {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });



// jQuery(function() {
//   var appear = false;
//   var pagetop = $('#page_top');
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
//       if (appear == false) {
//         appear = true;
//         pagetop.stop().animate({
//           'right': '0px' //右から0pxの位置に
//         }, 300); //0.3秒かけて現れる
//       }
//     } else {
//       if (appear) {
//         appear = false;
//         pagetop.stop().animate({
//           'right': '-50px' //右から-50pxの位置に
//         }, 300); //0.3秒かけて隠れる
//       }
//     }
//   });
//   pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
//     return false;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  function scrollTop(elem, duration) {
    let target = document.getElementById(elem);
    
    if (!target) return; // ボタンが存在しない場合は処理しない

    target.addEventListener("click", function () {
      let startY = window.pageYOffset;
      let startTime = performance.now();

      function scrollAnimation(currentTime) {
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo(0, startY * (1 - progress));

        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      requestAnimationFrame(scrollAnimation);
    });
  }

  scrollTop("page-top", 500); // ボタンをクリックしたら0.5秒でスクロール
});
