$(function(){
  // script 영역 slide banner  만들기 예제1
  const widthNum = 620;// slide 개별의 너비, carousel-inner의 너비를 계산 수 있다.

  // ul의 개수 가져오기
  let ulLeng = $("#carousel-inner ul.column").length;

  // ul 개수로 #carousel-inner 초기 너비 설정
  // console.log(widthNum*ulLeng);
  // $("#carousel-inner").css("width", widthNum*ulLeng)
  $("#carousel-inner").width(widthNum*ulLeng);

  //슬라이드 포지션 초기화
  // $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
  // $("#carousel-inner").css("margin-left", -widthNum);
  initialFunc("prev");

  //슬라이드 포지션 초기화 함수
  function initialFunc(init){
    $("#carousel-inner").css("margin-left", -widthNum);
    if( init === "prev" ){
      $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    }else if( init == "next" ){
      $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
    }
  }

  // prev button script
  // $("#carousel-prev").click(function(){
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   console.log(caInMarginLeft)
  //   $("#carousel-prev,#carousel-next").hide();
  //   $("#carousel-inner").animate({ marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
  //     // animation 실행이 끝난 직후 실행 영역
  //     initialFunc("prev");
  //     $("#carousel-prev,#carousel-next").show();
  //   });
  // });
  // next button script
  /*
  실습:
  prev button script를 참고 하여 next button script를
  구현하시오.
  */
  // $("#carousel-next").click(function(){
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   $("#carousel-prev,#carousel-next").hide();
  //   $("#carousel-inner").animate({ marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
  //     // animation 실행이 끝난 직후 실행 영역
  //     initialFunc("next");
  //     $("#carousel-prev,#carousel-next").show();
  //   });
  // });

  /*
  실습 :
  prev, next button script를 하나의 함수로 구현하시오.
  */

  function actionBtn(el){ // 버튼 클릭 함수 선언문
    el.click(function(){
      let caroInner = $("#carousel-inner");
      let caInMarginLeft = parseInt(caroInner.css("margin-left"));
      let isAni = caroInner.is(":animated");
      // console.log(isAni);
      if( !isAni ){
        if(el.attr("id") === "carousel-prev"){
          caroInner.animate({ marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
            initialFunc("prev");
          });
        }else{
          caroInner.animate({ marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
            initialFunc("next");
          });
        }
      }
    });
  }

  $(".btn").each(function(){
    actionBtn($(this));// 버튼 클릭 함수 실행
  });

  // auto slide
  let timerID = null;
  let auto = function(){
    timerID = setInterval(function(){ //setInterval()메서드 는 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출
      // console.log("slide!!");
      $("#carousel-next").trigger("click"); //trigger 강제로 click을 자동시킨??
      //$("#carousel-next").click();
    },3000);
    return timerID;
  }

  auto();

  console.log(timerID);

  /*
  실습 :
  아래 mouseenter, mouseleave mothod를 on method를 사용하여
  작성하시오.
  */

  $("#carousel,#carousel-prev,#carousel-next").mouseenter(function(){
    clearInterval(timerID);
  }).mouseleave(function(){
    timerID = setInterval(function(){
      $("#carousel-next").trigger("click");
    },3000);
    console.log(timerID);
  });

  $("#carousel,#carousel-prev,#carousel-next").on({
    mouseenter: function(){
      clearInterval(timerID);
    },
    mouseleave: function(){
      timerID = setInterval(function(){
        $("#carousel-next").trigger("click");
      },3000);
    }
  })


});// document ready
