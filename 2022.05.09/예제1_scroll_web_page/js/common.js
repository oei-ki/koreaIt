'use strict'
$(function(){
  const intervalNum = 150;
  //script 입력 영역
  $("nav ul li a,.back-to-top a,a.button,#footer ul li a").click(function(){
    // console.log(this.hash); /*hash:#값*/
    // console.log($(this.hash).offset().top);  /*offset:각각의 높이값*/
    let thisHash = $(this.hash);
    //1번 (애니메이션이 작동 될때 여러번 클릭을 방지)
    // let isAni = $("html,body").is(":animated");
    // if(!isAni){$("html,body").animate({scrollTop: thisHash.offset().top},1500);}
    //2번 (애니메이션 스탑후 다시작동),즉시 scroll 대상 변경
     $("html,body").stop();
     $("html,body").animate({scrollTop: thisHash.offset().top},1500); /*scrollTop:현재 스트롤의 위치값*/
    return false;
  });
/*
실습 2:
back-to-top요소 (scroll 상단 이동버튼)가 window scroll top 값이 0이 아닐때 on class를 추가하여 노출시키시오.
*/

// let scTop = $(window).scrollTop();
// console.log(scTop); /*새로고침시에만 현재화면값가져옴*/

let wHeight = $(window).height();
  $(window).scroll(function(){ /*this값 사용해야함*/
    // let winHeight = $(this).height(); /*현재 보이는 창의 높이*/
    // if(scTop!=0){
    //   $(".back-to-top").addClass("on")
    // }else{
    //   $(".back-to-top").removeClass("on")
    // }
    let backTo = $(".back-to-top");
    if($(this).scrollTop()!= 0){
     backTo.addClass("on")
    }else{
     backTo.removeClass("on")
    }
    /*
    실습 3 :
    section offset method를 사용하여 window가 스크롤될때 해당 section의 offset top window scroll이
    같고 section의높이와 동일한 영역 안일 때 해당 section에 active class를 추가하시오.
    */
    let scTop = $(this).scrollTop();
    $("section").each(function(){
      let thisElem = $(this);
      let offsetTop = $(this).offset().top  /*각 섹션탑값*/
      // console.log(offsetTop);
      if( offsetTop <= scTop + intervalNum && scTop <= offsetTop + wHeight){  /*intervalNum값 만큼 더 일찍 변화하게*/
        thisElem.addClass("active")
      }
    });
  });
});
