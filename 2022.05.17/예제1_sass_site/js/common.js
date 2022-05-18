$(function(){
  // #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여 해당 메뉴에 on class 추가하시오.

  // let currentHref = $(location).attr("href").split("/"); /*현재주소값가져옴*/
  // currentHref = currentHref[currentHref.length-1].split(".");/*재할당함*/
  // currentHref = currentHref[0]
  // $("#lnb a").each(function(){
  //   let matchHref = $(this).attr("href").split("/");
  //   matchHref = matchHref[matchHref.length-1].split(".");
  //   matchHref = matchHref[0]
  //   if(matchHref === currentHref) {
  //     $(this).addClass("on")
  //   }
  // });

  $("#lnb a").each(function(){
    if(splitfunc(location) === splitfunc(this)){
      $(this).addClass("on")
    }
  });

  function splitfunc(el){
    let thisElem = $(el).attr("href").split("/"); /* el.attr("href").split("/") 가능 대신 함수부를떄 $(this)*/
    thisElem = thisElem[thisElem.length-1].split(".")[0];
    return thisElem; /*지역변수라서 바깥으로 안나가기 때문에 반환을 해줘야함 return*/
  }
});
