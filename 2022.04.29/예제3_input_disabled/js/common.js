$(function(){
// script 영역 input disabled
  $("select").change(function(){
    // console.log($(this)[0][3]);
    // console.log($(this)[0][$(this)[0].length-1]);  //다중배열?

    console.log($(this).val());
    // console.log($(":selected").attr("value"));
    /*
    10대 일때는 input text field를 비활성화 하고
    10대가 아닐때는 input text field를 활성화 하시오.
    removeAttr("") : attribute 삭제
    */
    if($(":selected").attr("value") === "10대"){
      $("input").attr("disabled","disabled")
    }else{
      $("input").removeAttr("disabled")
    }
    // if($(this).val() != '10대'){
    //   $("input").removeAttr("disabled")
    // }else{
    //   $("input").attr("disabled","disabled")
    // }
    
  });

});
