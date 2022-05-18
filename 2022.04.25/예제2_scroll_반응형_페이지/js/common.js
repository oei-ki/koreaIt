$(function(){
  // script 영역 scroll 반응형 페이지 사용 예
  $(window).scroll(function(){
    let winHeight = $(this).height(); /*현재 보이는 window 창의 높이*/
    let sctop = $(this).scrollTop(); /*scrollTop() : window 창 화면의 위에서부터 값이 매겨짐, 맨 밑이 스크롤전체의 값*/
    // console.log(sctop);
    $(".slide").each(function(){ /* each 가 .slide값을 배열로 넣음 */
      let thisOffset = $(this).offset();
      console.log(thisOffset.top);

      // if( 0 <= sctop && sctop < 927 ){
        //   console.log($(this).find("h2").text());
        // }

      // slide 구간을 if구문으로 체크하고 각 구간마다 h2의텍스트를 log에 출력하시오.
      if( thisOffset.top <= sctop && sctop < thisOffset.top + winHeight/3  ){
        /*
        0 <= sctop && sctop < 920   //each문이라 if구문 돌고있는즁 //배열[0,927,1854,2781,3708]
        927 <= sctop && sctop < 1854
        */
        // console.log($(this).find("h2").text());
        // console.log($(this).data("background"));
        // console.log($(this));
        //body요소에 background-color 값을 $(this)(.slide)요소의 data-background 값으로 변경하시오.
        let bodybg = $(this).data("background");
        $("body").css('background-color', bodybg);
        $(this).addClass("on");
        // console.log($(this))
      }else{
      }
      // $(this).css({'background-color':$(this).data("background")});



    });

    let navBar = $("nav");
    if(sctop > winHeight - 70){
      navBar.addClass("fixed")
    }else{
      navBar.removeClass("fixed")
    }


  });

});
