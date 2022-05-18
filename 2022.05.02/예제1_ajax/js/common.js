$(function(){
// script 영역 ajax
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data){ /*data임의 위의 값을 받으려고 함*/
      //실행구문
      // console.log($(data).find("item"));
      // console.log($("item",data).text());
      // console.log($("link",data).text());
      console.log(data);

      /*
      데이터의 item 요소를 개별로 추출하고 아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
      dt a : xml파일 내부 item의 title
      dt a href : xml파일 내부 item의 link
      dd : xml파일 내부 item의 description
      <dt><a href=''>타이틀내용</a></dt><dd>내용</dd>
      1. each method 사용
      2. data 정보를 tag와 조합
      3. oppend, prepend or string type의 빈 변수에 복합대입연산으로 추가가능
      */

      // let title = $("link",data).text()
      // let link = $("title",data).text()
      // let txt = $("description",data).text()
      //   $("dl").html(`<dt><a href=${title}>${link}</a></dt><dd>${txt}</dd>`)

        // let ahtml = ''
        $(data).find("item").each(function(){
          // let title = $(this).find("title").text()   /*<![CDATA[태그와 글구분할 내용?]]*/
          // let link =$(this).find("link").text()
          // let txt = $(this).find("descrition").text()
          let title = $(this).find("title").html()  /*html사용시???CDATA사용안함..*/
          let link =$(this).find("link").html()
          let txt = $(this).find("descrition").html()
          console.log(this);
          $("dl").append(`<dt><a href=${link}>${title}</a></dt><dd>${txt}</dd>`)
        });

        // $("item",data).each(function(){
        //   console.log($("link",this).text());
        // })
    }
  });

  $("button").on("click",function(){
    if( $(this).attr('class') == 'on'){
      $(this).removeClass("on")
    }else if( $(this) != 'on') {
      $(this).addClass("on")
    }
    // if($(this).hasClass("on")){
    //   $(this).removeClass("on")
    // }else{
    //   $(this).addClass("on")
    // }
  });

  // $("button").click(function(){
  //   $(this).toggleClass("on")
  // });

});
