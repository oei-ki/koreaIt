$(function(){
// script 영역
  // $(":file").mouseenter(function(){//mouseover
  //   //마우스 올렸을 떄
  //   $(this).after("<p>업로드 가능한 파일의 용량은 300kb입니다.</p>")
  // }).mouseleave(function(){//mouseout
  //   $(this).next().remove();
  // });

  //on
  // $(":file").on({
  //   mouseover: function(){
  //
  //   },
  //   mouseout: function(){
  //
  //   }
  // })

  $("#img-input").change(function(){
    // console.log($(this));  //[input#img-input] jquery object type으로 요소를 받음.
    // console.log(this);  // <input type="file" id="img-input"> dom 요소로 받음
    readURL(this);
  });

  function readURL(input){
    // console.log(input.files[0]);  // input : <input type="file" id="img-input">
    if(input.files && input.files[0]){
      console.log("파일을 가져왔습니다.");
      let reader = new FileReader();
      console.log(reader);
      reader.readAsDataURL(input.files[0]);  //.readAsDataURL : 바이너리 파일을 Base64 Encode 문자열로 반환 Ex.) data:image/jpeg; base64, GDYG….
      reader.onload = function(e){  //onload: 읽기 동작이 성공적으로 완료되었을때 발생
        console.log(e.target.result);
        $("#image-section").attr("src",e.target.result);
      }
    }
  }
});
