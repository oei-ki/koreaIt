$(function(){
  const widthNum = 620; //slide 개별의 너비, carousel-inner의 너비를 계산할 수 있다.

  // ul의 개수 가져오기
  let ulLeng = $("#carousel-inner ul.column").length;
  console.log(ulLeng);

  // ul 개수로 #corousel-inner 초기 너비 설정
  $("#carousel-inner").css( "width", widthNum*ulLeng );
  // $("#carousel-inner").width(widthNum*ulLeng)

  //슬라이드 포지션 최기화
  // $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
  // $("#carousel-inner").css("margin-left", -widthNum);
  initialFunc("prev");

  //슬라이드 포지션 초기화 함수
  function initialFunc(init){
    $("#carousel-inner").css("margin-left", -widthNum);
    if(init === "prev"){
      $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    }else if(init === "next"){
      $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
    }
  }


  // prev button script
  // $("#carousel-prev").click(function(){
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   console.log(caInMarginLeft);
  //   $("#carousel-prev,#carousel-next").hide(); //hide 삭제
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
  //     // animation 실행이 끝난 직후 실행 영역
  //     initialFunc("prev");
  //     // $("#carousel-inner").css("margin-left", -widthNum);  //초기화..
  //     // $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
  //     $("#carousel-prev,#carousel-next").show();
  //   });
  // });
  // $("#carousel-next").click(function(){
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   console.log(caInMarginLeft);
  //   $("#carousel-prev,#carousel-next").hide(); //hide 삭제
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
  //     initialFunc("next");
  //     // $("#carousel-inner").css("margin-left", -widthNum);
  //     // $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
  //     $("#carousel-prev,#carousel-next").show();
  //   });
  // });

  function caFunc(el){
    el.click(function(){
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      $("#carousel-prev,#carousel-next").hide(); //hide 삭제
      if( $(el).hasClass("prev")){
        $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
          initialFunc("prev")});
      }else {
        $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
          initialFunc("next")});
      };
      $("#carousel-prev,#carousel-next").show();
    });
  };
  $("img").each(function(){
    console.log(this);
    caFunc($(this));
  })



  });
