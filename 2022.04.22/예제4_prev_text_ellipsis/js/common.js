$(function(){
  //script 영역 text pllipsis 사용 예
  let elem = $(".more-text");
  const showText = 100; //보여주고 싶은 글자 수
  let moreBtnText = "Show more"
  let lessBtnText = "Show Less"
  let content = elem.html(); //html로 넘어가게 하는??
  let contentLeng = content.length; //총글자수
  let lessText = content.substr(/*시작인덱스*/0,showText/*길이*/); //화면이 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText,contentLeng); //화면이 줄어들때 잘린 텍스트
  let changeHtml = '';
  if( showText < contentLeng ){
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`
    elem.html(changeHtml);
  }

  // console.log(changeHtml);
  //버튼 실행 영역
  // class 삭제 할때 el.removeClass('on')
  /*
  .more-btn을 클릭할때마다
  .active가 toggle형태로
  추가될 수 있도록 if구문 작성
  */
  $(".more-btn").click(function(){
    // console.log($(this).hasClass('active'));  /*classList.contains 비슷한거?*/
    // $(this).toggleClass('active')  밑이랑 같음

      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).html(`<span>${lessBtnText}</span>`)
      }else{
        $(this).addClass('active');
        $(this).html(`<span>${moreBtnText}</span>`)
      }

      /* prev(),parent(),toggle() 3개의 method를 사용하여 줄임말 포함된 span,
       잘려진 텍스트를 담은 span을 선택하여 toggle 형태로 구현
       parent() : 선택자의 부모 요소 선택
       prev() : 선택자의 바로 앞 요소 선택
       next() : 선택자의 바로 뒤 요소 선택
       toggle() : display: none 반복하여 나타냄
       */
      $(this).prev().toggle();
      $(this).parent().prev().toggle();
      e.prevenetDefault();
      return false;
      // console.log($(this).parent()) //span.more-content
      console.log($(this).prev())  //span
  });

});
