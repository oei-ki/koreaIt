$(function(){
  // script 영역 focus 예
  // document.querySelector('input').value
  //method chain을 사용하여 입력한 값의 font color #cccccc로 변경하시오.
  $('input').val("입력해주세요").css("color","#cccccc").one('focus',function(){ //초기 포커스 일때 한번만 실행
    $(this).val('').css('color','black');
  })
  .blur(function(){ //focus out 일때를 의미한다.
    if($(this).val() == ''){
      $(this).val('입력해주세요.').css("color","#cccccc").one('focus',function(){
        $(this).val('').css('color','black');
      });
    }
  });

});
