$(function(){
  // script 영역 input value 사용 예
  let pHtml = $("p").html();

  $("button").click(function(){
    console.log("click");
    let btnNum = $(this);
    console.log(btnNum);
    //elem.innetText  자바스크립트 아래
    if(btnNum.text() == "확인"){
      // console.log("이 버튼은 확인 버튼입니다.");
      //elem.value =  자바스크립트 아래
      let inputVal = $("input").val(); /*input 값 가져옴*/
      $("p").text(`${inputVal}로 전송이 됩니다. 전송을 원하시면 전송 버튼을 눌러주세요.`);
      // console.log(`확인 전 : ${btnNum.text()}`);
      btnNum.text("전송");
      // console.log(`확인 후 : ${btnNum.text()}`);

      // forEach : javascript
      // each : jquery
      // each를 사용해서 버튼의 첫번째 요소의 텍스트를 '전송'으로 변경
      // $("button").each(function(i){
      //   if( i == 0 ){
      //     $(this).text("전송");
      //   }
      // });


      // console.log(inputVal);
    }else if( btnNum.text()  == "reset"){
      // console.log("이 버튼은 reset 버튼입니다.");
      //html(p태그 내부)초기화
      // 1번 방벙 : 직접입력
      $("p").html("E-mail : <input type='email' name='name'>");

      // 2번 방법 : 초기 로드 시 html를 변수로 담는다.
      // $("p").html(pHtml);

      //버튼의 초기화(텍스트)
      console.log("현재 텍스트는 확인입니다.");
      //1번 방법 each활용
      // $("button").each(function(i){
      //   if( i == 0 && $(this).text() == "전송" ){
      //     // console.log("현재 텍스트는 전송입니다.");
      //     $(this).text("확인");
      //   }
      // });
      // if( $(".btn01").text() == "전송" ){ 내가 함..되긴 함
        //   $(".btn01").text("확인");
        // }

      //2번 방법 prev()
      let btnNumPrev = btnNum.prev();
      if(btnNumPrev.text() == "전송"){
        console.log("현재 텍스트는 전송입니다.");
        btnNumPrev.text("확인")
      }


    }else if(btnNum.text() == "전송"){
      $("p").text("전송이 완료되었습니다.");

      // alert("전송이 완료되었습니다.");
      // window.location.href = "http://naver.com"; /*네이버로 이동*/
      // console.log(window.location);

    }

  });
});
