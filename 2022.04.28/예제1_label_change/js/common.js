$(function(){
  // script 영역 label change 예
  //첫번째 방법
  


  //2번째 방법  //     :타입
  // let inputElem = $(":radio");
  // console.log(inputElem);  //[input#gender-man, input#gender-woman,
  // $(":radio").change(function(){
  //   // console.log('change!!');
  //   let genderNum = $(this).attr("id"); //클릭한(change) radio의 id값을 가져온다
  //   // console.log(genderNum);
  //   // console.log($("label[for='"+genderNum+"']").text());  //남자,여자
  //   // $("Label").css("font-weight",""); //"normal"==""
  //   $("label").css("font-weight","normal"); //Label 모든 요소의 font-weight 초기화
  //   $("label[for='"+genderNum+"']").css("font-weight","bold"); //선택한 라디오의 라벨글자를 굵게 함
  // });

  /*
  취미를 구분하는 checkbox 및 Laber를 추가하고 (헬스, 그림) change method 내부에서 if조건문을 사용하여
  type 속성을 구분하고 checkbox, radio 일때 로직을 구현하시오.
  */
    // //1  : checked 확인 방법
    // if($("input:checked").length > 0 ){}  // html checked가 되어있는 갯수를 확인하는거임
    // console.log($("input:checked").length);
    // //2 : checked 확인 방법
    // if($("input[type:checkbox]").prop("checked") == true){} //prop : true fals로 가져옴
    // //3 : checked 확인 방법
    // if($("input[type:checkbox]").is(":checked") == true){}

    $(":checkbox, :radio").change(function(){
      let typeNum = $(this).attr("id")
      console.log($(this).attr("type")) // $(this) :클릭한 input의 id값
      if($(this).attr("type") == "radio"){
        $("input[type=radio] + label").css("font-weight","normal"); //Label 모든 요소의 font-weight 초기화 //"normal"==""
        $("input[type=radio] + label[for='"+typeNum+"']").css("font-weight","bold"); //선택한 라디오의 라벨글자를 굵게 함
      }else{ //else if($(this).attr("type") == "checkbox")
        if($(this).prop("checked") == true){
          $("input[type=checkbox] + label[for='"+typeNum+"']").css("font-weight","bold");
        }else{
          $("input[type=checkbox] + label[for='"+typeNum+"']").css("font-weight","");
        }
      }
  });
});
