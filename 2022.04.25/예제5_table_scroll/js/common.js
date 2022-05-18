$(function(){
  // script 영역 table scroll 생성 시 스크롤바  수정 예
  $(window).on('load resize',function(){ /*on('') : 매서드를 여러개 사용할수 있게 해줌?*/
    // 실행구문 영역
    console.log(`table paretn width: ${$(".tbl-content").outerWidth()}, table width: ${$(".tbl-content table").outerWidth()}`); /*outerWidth : 내가 조절해둔 창의 넓이 줄이면 값도 줄어듬*/
    let scrollBarWidth = $(".tbl-content").outerWidth() - $(".tbl-content table").outerWidth();  /*값:8, 스크롤바 넓이 6 border 2*/
    console.log(scrollBarWidth);
    $(".tbl-header").css("padding-right",scrollBarWidth);
}).resize(); /*resize : 윈도우 크기가 바뀔 때 어떤 작업을 할 수 있게 한다. */
  // function testFunc(){  //위 .on이 없으면 이런식으로 진행
  // }
  // $(window).onload(testFunc).resize(testFunc)
});
