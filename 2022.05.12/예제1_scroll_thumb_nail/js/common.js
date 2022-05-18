'use strict'
$(function(){
  $(".wrap").each(function(i){
    let thisWrap = $(this); // 현재 .wrap을 가져오기
    let itemsNum = thisWrap.find(".items"); //현재 wrap의 items 선택
    // let  itemsNum = $(".items",this);
    let itemsLeng = itemsNum.length;
    // console.log(itemsLeng);
    itemsNum.mouseenter(function(){
      // mouseenter 시 실행구문
      let thisIndex = $(this).index();
      console.log(thisIndex);

      $(this).addClass("on");
      if(thisIndex == 0){
        thisWrap.css("margin-left","0px");
      }else if(thisIndex == itemsLeng - 1){
        thisWrap.css("margin-left","-100px");
      }else {
        thisWrap.css("margin-left","-50px");
      }
    }).mouseleave(function(){
      itemsNum.removeClass("on");
      thisWrap.css("margin-left","0px")
    })
  });
});
