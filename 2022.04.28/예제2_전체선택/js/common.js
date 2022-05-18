$(function(){
// script 영역 all selected  예
  // 1번: click event, attr ()
  // $("button").click(function(){
  //   // console.log($("input[type='checkbox']").attr("checked"));
  //   // $("input[type='checkbox']").attr("checked");
  //   $(":checkbox").attr("checked","checked"); //전체선택
  // });

  // 2번: on method,prop()을 사용하여 click
  $("body").on("click","button",function(){
    // console.log("click!!");
    // $(":checkbox").attr("checked","checked");
    // $(":checkbox").prop("checked",true); //checked속성을 true로 만들어줌
    // console.log(  $(":checkbox").prop("checked"));
    // $(":checkbox").each(function(){
    //   if($(this).is(":checked")){
    //     $(this).prop("checked",false);
    //   }else{
    //     $(this).prop("checked",true);
    //   }
    // });
    // console.log($(this));  //button임
    /*
    실습 :
    전체 선택 버튼을 all 클래스를 추가하여 checkbox를 모두 선택하고 버튼텍스트는 '전체 해제'로 변경
    전체 해제 버튼을 클릭하면 all을 제거하고 checkbox를 모두 선택 해제하는 로직을 구현하시오.
    toggleClass, hasClass, text, prop
    */
    // $(this).toggleClass("all");
    // if($(this).hasClass("all")){
    //   $(this).text("전체해제");
    //   $(":checkbox").prop("checked",true)
    // }else{
    //   $(this).text("전체선택");
    //   $(":checkbox").prop("checked",false)
    // }
    //
    allCheckFunc($("button"),$(":checkbox"))
    });

  });
