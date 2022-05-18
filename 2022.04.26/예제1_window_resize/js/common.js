$(function(){
  // script 영역 window resize 예
  // $("body").prepend("<div class='box'></div>")??로또 추첨기 어쩌구
  $('.box').each(function(){
    // console.log($(this));
    let transSize = "+"; //크기변환 전환
    let leftDir = "+"; //x방향 전환
    let topDir = "+"; //y축 방향 전환
    let speedNum = 1;
    let thisElem = $(this);
    const maxNum = 6;
    $(window).resize(function(){
        let thisOffset= thisElem.offset()  /*4개의 div box 좌표값 배열 */
        console.log(thisOffset);
        let thisLeft = thisElem.offset().left;
        console.log(thisLeft);
        let thisTop = thisElem.offset().top;
        //size 조건식
        if(thisElem.width() > 200){
          transSize = '-';
        }else if(thisElem.width() < 50){
          transSize = '+';
        }
        //x축 변화 조건식

        if( 0 > thisLeft ){
          leftDir = "+";
        }else if( $(window).width() - thisElem.width() < thisLeft ){
          leftDir = "-";
          speedNum = Math.ceil(Math.random()*10);  //random() 0~0.9 * 10 ceil floor round 소수점 자리 삭제
          if(speedNum > maxNum){
            speedNum = maxNum-1;
          }
        }

        //y축 변화 조건식
        if( 0 > thisTop ){
          topDir = "+";
        }else if( $(window).height() - thisElem.height() < thisTop ){
          topDir = "-";
          speedNum = Math.ceil(Math.random()*10);
          if(speedNum > maxNum){
            speedNum = maxNum-1;
          }
        }

        //thisEleem 최종 적용
        thisElem.css({"width":transSize+"="+speedNum+"px","height":transSize+"="+speedNum+"px"}); /*resize 할 때마다 1씩 증감한다.*/
        thisElem.css({"left":leftDir+"="+speedNum+"px","top":topDir+"="+speedNum+"px"});
    });
  });
});
