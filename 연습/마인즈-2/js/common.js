$(function(){
  let mainTxt = "Make the"
  let mainTxt2 = "Most of"
  $("section#Home").load(function(){
    $(".txt-box ul li").each(function(){
      console.log($(this));
    })
    // mainTxt.substring(0,7)
  });
});
