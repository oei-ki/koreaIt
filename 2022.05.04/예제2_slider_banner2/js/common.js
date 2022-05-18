$(function(){
  const widthNum = 150; //slide li 개별 너비, ul.column의 너비를 계산할 수 있다
  const caInner = $("#carousel-inner");
  // li의 개수 가져오기
  let liLeng = $("#carousel-inner ul.column li").length;
  console.log(liLeng);

  // li의 개수로 ul.column의 너비를 설정
  $("#carousel-inner ul.column").css("width", widthNum*liLeng);

  //1번 : 슬라이드 포지션 초기화 ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동하시오
  //2번 : ul.column의 초기 슬라이드 위치로 이동하시오.
  $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
  caInner.css("margin-left", -widthNum)

  function initialFunc(init){
    caInner.css("margin-left", -widthNum)
    if(init == "prev"){
      $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
    }else{
      $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column")
    }
  }

  initialFunc("prev");
  //prev button javascript
  // prev button을 구현하시오.
  // $("#carousel-prev").click(function(){
  //   let caInMarginLeft = parseInt(caInner.css("margin-left"));
  //   let isAni = caInner.is(":animated");
  //   if( !isAni ){
  //     caInner.animate({marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
  //       caInner.css("margin-left", -widthNum)
  //       $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
  //     });
  //   };
  // });

  function actionBtn(el){
    el.click(function(){
      let caInMarginLeft = parseInt(caInner.css("margin-left"));
      let isAni = caInner.is(":animated");
      if(!isAni){
        if(el.attr("id") === "carousel-prev"){
          caInner.animate({marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
            initialFunc("prev")
          });
        }else if(el.attr("id") === "carousel-next"){
          caInner.animate({marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
            initialFunc("next")
          });
        }
      }
    })
  }

$(".btn").each(function(){
  actionBtn($(this))
})

//auto slide  setInterval
let timerId = null;
let auto = function(){  //auto라는 함수생성
  timerId = setInterval(function(){
    $("#carousel-next").trigger("click");
  },1000)
}

  auto();
console.log("timerId"+timerId());
  // prev button script
  // $("#carousel-next").click(function(){
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   // console.log(caInMarginLeft);
  //   let isAni = $("#carousel-inner").is(":animated");
  //   if( !isAni ){
  //     caInner.animate({marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){ /*animate 중간에 실행되야해서 콜백함수 사용*/
  //       $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column")
  //       caInner.css("margin-left", -widthNum)
  //     });
  //   };
  // });


});// document ready
