$(function(){
  let elem = $(".more-text");
  const showText = 100; //보여주고 싶은 글자 수
  let moreBtnText = "Show more"
  let lessBtnText = "Show Less"
   //html로 넘어가게 하는??
  // elem = document.body.getElementByClassName('more-text')
  // for(let i = 0; i < elem.length ;i++){
  //   let content = elem[i].html();
  // } //아래 each method와 같은 구문
  elem.each(function(i){
    let content = $(this).html();
    let contentLeng = content.length; //총글자수
    let lessText = content.substr(/*시작인덱스*/0,showText/*길이*/); //화면이 줄어들때 보여지는 텍스트
    let moreText = content.substr(showText,contentLeng); //화면이 줄어들때 잘린 텍스트
    let changeHtml = '';
    console.log(i)
    if( showText < contentLeng ){
      changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
      $(this).html(changeHtml);
      if(i == 0){
        $(this).html('1'+changeHtml);
      }else if(i == 1){
        $(this).html('2'+changeHtml);
      }else if(i == 2){
        $(this).html('3'+changeHtml);
      }
    }
  });

  $(".more-btn").click(function(e){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).html(`<span>${lessBtnText}</span>`)
      }else{
        $(this).addClass('active');
        $(this).html(`<span>${moreBtnText}</span>`)
      }
      $(this).prev().toggle();
      $(this).parent().prev().toggle();
      e.preventDefault();
      return false;
    });

});
