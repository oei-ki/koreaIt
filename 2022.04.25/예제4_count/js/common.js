$(function(){
  // script 영역 animate() 사용 예
  let boxNum = $('.flex-box .count');
  boxNum.each(function(){  /* 8개의count배열이 생성됨 */
    console.log($(this));
    // $(this).attr('src','./img...') 아래랑 비슷? 초기값을 가져오는?
    $(this).prop('Counter',0).animate({Counter:$(this).text()},{/*객체형태로 받아옴?*/
      duration: 4000, /*4초동안 진행*/
      easing: 'swing',
      step: function(now){
        //console.log(now); /*now:진행경과를 보여줌*/
        console.log(Math.ceil(now));
        $(this).text(Math.ceil(now));
      },/*Counter입력 된 값 0에서 html에 입력된 숫자까지 증가*/
      complete: function(){
        console.log('완료');
        $('body').css('background-color','pink')
      }
    });
    $(this).addClass('on')
    // console.log($(this).prop('Counter'));


  // boxNum.animate({left:'100px'},4000,'swing',function(){
  //   alert('animation이 종료 되었습니다.');
  // });
  });
});
