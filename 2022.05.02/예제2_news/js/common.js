$(function(){
// script 영역 ajax
  $.ajax({
    url: 'data.xml',
    dataType: 'xml', //서버가 요청 url을 통해서 응답하는 내용?
    success: function(data){
      $(data).find("item").each(function(){
        let c = $(this).find("category").text();
        let n = $(this).find("news").text();
        let t = $(this).find("title").text();
        let d = $(this).find("date").text();
        let name = $(this).find("name").text();
        let txt = $(this).find("descrition").text();
        $("dl").append(`<dt>${c}<br>${n}<br>${t}<br>${d}<br>${name}<br></dt><dd>${txt}</dd><br>`)
      });

    }
  });
  $("button").click(function(){
    $(this).toggleClass("on")
  })
});
