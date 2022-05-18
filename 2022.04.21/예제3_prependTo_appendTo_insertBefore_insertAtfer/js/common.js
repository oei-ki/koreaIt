$(function(){
  //script 영영 prependTO(), paaendTo() 사용 예
  // $("strong"). prependTo("p");
  // // $('.items:last-child').prependTo('wrap');
  // $(".items:nth-child(2)").appendTo("#wrap");
  // console.log($(".items:nth-child(2)").text());
  // console.log($(".items").eq(2).text());

  //insertBefore() insertAfter() 사용 예
  $("#wrap").insertBefore("p"); /*p 뒤로 ("#wrap")*/
  // items5을 item3 바로 앞으로 이동시키세요
  $(".items:nth-child(5)").insertBefore(".items:nth-child(3)") //items5를 추가하면 index  값이 변경 되어서 nth-child 값도 변경 된다.
  //strogn 태그를 item3 자리 뒤로 이동 시키세요(insertAfter 사용)
  $("strong").insertAfter(".items:nth-child(4)")
  // $("strong").insertBefore(".items:nth-child(5)")
  console.log($('.items:last-child').text());
  //insertAfter, insertBefore 작동 이후 last-child 요소가 변경된다.
});
