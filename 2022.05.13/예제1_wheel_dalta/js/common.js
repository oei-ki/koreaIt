'use strict'
// $(function(){
//   let windowHeight = $(window).innerHeight();
//   let direc = 0; /*방향 전환을 위한 변수 정의*/
//   let wheelAction = false; /*false 일 떄 실행하겠다*/
//   let maxDirec = $(".wheel-wrap section").length - 1;
//   $(window).on('wheel',function(event){
//     // console.log(event.originalEvent.wheelDelta);  /*wheel의 값을 출력한디:*/
//     let eventDelta = event.originalEvent.wheelDelta;
//     if(eventDelta > 0 && wheelAction == false){ /*스크롤 올리면 값이 120*/
//       // console.log("wheel up!");
//       if( direc <= 0 ){
//         direc = 0;
//       }else {
//         direc--
//         // console.log(direc);
//         $("html").animate({scrollTop:direc*windowHeight},{
//           duration: 1000,
//           start: function(){
//             wheelAction = true;
//           },
//           complete: function(){
//             wheelAction = false;
//           }
//         });
//       }
//     }else if( eventDelta < 0 && wheelAction == false ){ /*스크롤 내리면 값이 -120*/
//       // console.log("wheel down!!");
//       // direc = direc + 1 ;
//       // direc +=1;
//       if(direc >= maxDirec ){  /*마지막 section일 때 움직이지 않게 함 (값이 5일때 멈춤)*/
//         direc = maxDirec;
//       }else {
//         direc++ /*값을 1씩 올려주며 section값 증가*/
//         // console.log(direc);
//         $("html").animate({scrollTop:direc*windowHeight},{ /*section의 번호랑 윈드우창의 길이만큼 곱하여 창을 올려준다*/
//           duration: 1000,
//           start: function(){  /*움직일 때 스크롤이 더 내려가지 못하게 함*/
//             wheelAction = true;
//           },
//           complete: function(){
//             wheelAction = false;
//           }
//         });
//       }
//     }
//   });
// });


$(function(){
  let windowHeight = $(window).innerHeight();
  let direc = 0;
  let wheelAction = false;
  let maxDirec = $(".wheel-wrap section").length - 1;
  function aniH(){
    $("html").animate({scrollTop:direc*windowHeight},{
      duration: 1000,
      start: function(){
        wheelAction = true;
      },
      complete: function(){
        wheelAction = false;
      }
    });
  };
  aniH();
  $(window).on('wheel',function(event){
    let eventDelta = event.originalEvent.wheelDelta;
    if(eventDelta > 0 && wheelAction == false){
      if( direc <= 0 ){
        direc = 0;
      }else {
        direc--
        aniH()
      }
    }else if( eventDelta < 0 && wheelAction == false ){
      if(direc >= maxDirec ){
        direc = maxDirec;
      }else {
        direc++
        aniH()
      }
    }
  });
});
