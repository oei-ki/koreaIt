$(function(){
  //jquery 실행구문
  // document.querySelector("li").style.color = 'red'; 아래와 입력방식만 다르고 같은결과임

  // $("li").css("color",/*매개변수*/"red"/*값*/)/*css메서드*/
  // $("#first").css("color","blue");
  // $("li.fourth").css("background","green");

  /*
  세번째 li의 span 요소에 배경색을 blue로 변경
  두번째 li의 p 요소의 font-size를 10px로 변경
  */
  // $('li.third span').css('background-color','blue')
  // $('li.second p').css('font-size','10px')

  let num = 30;
  $(".first, .third, .fourth").css("left", num + "px" )  /*px로 자동인식? .px아니면 명시해줘야함*/
  $(".first, .third, .fourth").css("left", num )  /*px로 자동인식? .px아니면 명시해줘야함*/

  /*ul 첫번째 li의 자식 요소 span에 텍스트 색상을 red로 변경*/
  // $('li.first > span').css('color','red');
  // $("*").css("color","blue"); /*젤 밑에 있는게 작용이 된다?*/

  /*ul의 세번째 li요소를 인접 선택자를 사용하여 텍스트 색상을 blue 변경하세요*/
  $('ul li.second + li').css('color','blue');  /*인접선택자를 사용한 요소 선택, 선택자 + 다음 인접 선택자*/
  // $('li:last-child').css('color','red');//유사클래스를 사용한 요소 선택
  // $('li:first-child').css('color','green').css('font-size','10px'); //css 다중사용 (methods chain)
  //
  // $('li.second ~ li').css('color','yellow') //동위 선택자를 사용한 요소 선택
  // $('li:not(:first-child)').css('color','red'); //부정 유사 클래스를 사용한 요소 선택


  //메뉴구조 요소를 선택하고 style을 적용
  //서브메뉴 내부 요소 span의 텍스트 색상을 blue로 변경
  // $('ul ul span').css('color','blue');
  // $('.submenu span').css('color','blue');
  // $('span').css('color','red');
  // $('.submenu > li > a > p > span').css('color','blue');
  //
  // $('.submenu span:empty').css('background','red');  /*empty 자식요소가 비어있는지 판단하는 도구*/



});
