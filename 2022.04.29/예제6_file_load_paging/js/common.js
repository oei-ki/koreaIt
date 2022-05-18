$(function(){
// script 영역 file load
  $("footer").load("./footer.html .inner")
  let winHref = window.location.href
  let test = winHref.split("ing/");
  let txt = test[test.length-1].split(".")
  let pageTxt = txt[0]
  console.log(txt); //string

  $("header").load("./header.html .inner", function(){
    console.log($(this));
    $("#gnb ul li").each(function(){
      if( pageTxt == $(this).text()){
        $(this).addClass("on");
      }else{
        $(this).removeClass("on");
      }
    });
  });



  /*
  window location href 값을 가져오고 split를 사용하여 해당페이지를 인식할 수 있는 스트링값으로 현재페이지 동일한 gnb li 요소에
  'on'클래스를 추가하시오.
  */

});
