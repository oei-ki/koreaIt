$(function(){
  //script 영역 prev toggle 사용 예
  // document.querySelector("gnb").prevElement
  console.log($("#gnb").prev());
  console.log($("#gnb").next());
  $("button").click(function(){
    $("#header").toggle(); //사라졌다 생겼다
  });
});
