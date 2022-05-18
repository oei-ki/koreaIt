$(function(){
  $(window).scroll(function(){
    let winHeight = $(window).height(); /*현재 보이는 창의 높이*/
    let scTop = $(this).scrollTop(); /*scrollTop() : 화면의 위에서부터 값이 매겨짐  맨 밑이 스크롤전체의 값*/
    let navBar = $("nav");
    // console.log(winHeight);
    console.log($(this).scrollTop()); //여기서 this란 window를 의미??
    // console.log('test');
    if( scTop > winHeight - 70 ){ //scroll값은 내가 스크롤을 내리는만큼 올라감
      navBar.addClass('fixed');
    }else{
      navBar.removeClass('fixed');
    }
  });
});
