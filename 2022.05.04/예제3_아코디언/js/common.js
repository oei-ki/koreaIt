$(function(){
  // $("dd:not(:first)").css("display","none");
  // $("dl dt").click(function(){
  //   console.log($("+dd",this).text());
  //   if($("+dd",this).css("display") == "none"){
  //     $("dd").slideUp("slow");
  //     $("+dd",this).slideDown("slow");
  //   }
  // });

  /*
  dl dt click event 를 animate method를 사용하여 구현
  */

  $("dd:not(:first)").css({
    "display":"none",
    "height":0
  })
  $("dl dt").click(function(){
    let isAni = $("dd").is(":animated");
    let thisElem = $(this);
    console.log($(thisElem));
    if($("+dd",thisElem).css("display") == "none"){
        $("dd").each(function(){  //닫혀있는 dt를 열때 열려있는 dt를 닫는 함수
          // console.log($(this));


          // if($(this).css("display") == "block"){  //display로
            //   $(this).animate({height:0},"slow",function(){  //도중에 닫혀야함 콜백함수
              //     $(this).css("display","none")
              //   })
              // }


              if(parseInt($(this).css("height")) == 300){ //높이값으로
                $(this).animate({height:0},300,function(){
                  $(this).css("display","none")
                });
              }
            });
      $("+dd",this).css("display","block").animate({height:300})
    }
});

  // $("dl dt").click(function()
  //   if($("+dd",this).css("display") == "none"){
      // $("dd").slideUp("slow");
      // $("+dd",this).slideDown("slow");


});// document ready
