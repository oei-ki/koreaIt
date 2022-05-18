$(function(){

  let elem = $(".more-text");
  const showText = 100; //보여주고 싶은 글자 수
  let moreBtnText = "Show more"
  let lessBtnText = "Show Less"
  let content = elem.html(); //html로 넘어가게 하는??
  let contentLeng = content.length; //총글자수
  let lessText = content.substr(/*시작인덱스*/0,showText/*길이*/); //화면이 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText,contentLeng); //화면이 줄어들때 잘린 텍스트
  let changeHtml = '';
  if( showText < contentLeng ){ /*active: 화면이 줄어든 상태??*/
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
    elem.html(changeHtml);
  }


  $(".more-btn").click(function(){

      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).html(`<span>${lessBtnText}</span>`)
      }else{
        $(this).addClass('active');
        $(this).html(`<span>${moreBtnText}</span>`)
      }


      $(this).prev().toggle();
      $(this).parent().prev().toggle();
      e.prevenetDefault();
      return false;

      console.log($(this).prev())  //span
  });

});
