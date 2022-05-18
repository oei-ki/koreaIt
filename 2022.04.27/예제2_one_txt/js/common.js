$(function(){
  // script 영역 one 예
 // $("a").click(function(){
 //   console.log($(this));
 //   $("a").removeClass("on"); //기존 모든 요소에 추가된 클래스를 초기화(삭제)
 //   $(this).addClass("on");
 //   $("img").attr("src",$(this).attr("href"));
 //   return false;
 // });


  let count = 0;
  $("a").one('click',function(){ /*a태그가 배열에 담김??*/
    $("a").removeClass("on");
    $(this).addClass("on");
    $("img").attr("src",$(this).attr("href"));
    console.log(count);
    count++;
    return false;
  });

  // $("a").click(function(){
  //   return false;
  // });

});
