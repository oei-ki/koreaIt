$(function(){
// script 영역 event handler  예
  // event 개별 사용
  // $(":submit").mouseover(function(){ //커서를 속성에 두는??
  //   // console.log("mouseover");
  //   $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>")
  // });
  // $(":submit").mouseout(function(){
  //   // console.log("mouseout");
  //   $(this).next().remove();
  // });


  // event method chain 사용
  // $(":submit").mouseover(function(){
  //   $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>")
  //   }).mouseout(function(){
  //   $(this).next().remove();
  // });

  //on
  $(":submit").on({
    mouseover:function(){
      $(this).after("<p>입력한 내용을 서버로 전송합니다.</p>")
    },
    mouseout:function(){
      $(this).next().remove();
    }
  });

});
