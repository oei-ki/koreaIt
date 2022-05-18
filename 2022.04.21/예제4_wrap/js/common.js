$(function(){
  //script 영역 wrap(), wrapAll(), wrapInner() 사용 예
  //wrap() 특정 태그를 지정한 태그로 감싸는 method
  // $('strong').wrap('<h2></h2>')  /*선택한 요소를 개별로 감싼다. h2 블록타입이라 떨어짐*/

  /*
  메뉴 클래스 태그의 자신 요소 span을 선택하고 개별요소를
  '<a href="http://naver.com" trarger=''></a>' 로 감싸시오.
  */
  // $('.menu ul li span').wrap('<a href="http://naver.com" trarger="_self"></a>');
  // $('span').wrapAll('<header></header>') /*선택한 요소들을 모아 전체를 감싼다.*/
  /* wrapAll 주의 사항 : 선택한 모든 요소를 가지고 와서 감싸는 메서드이며 웹페이지 전체에 영향을 줄 수
   있으므로 선택 시 구조를 명확히 하는 것이 필요*/


  //wrapAll()
  /*
  1. .wrap all 의 요소에 있는 p태그들을 .item-wrap 클래스 갖고 있는 div태그로 wrapAll 메서드를 사용하여
  감싸시오.
  2. .wrap all 의 요소에 있는 span태그들을 .span-wrap 클래스 갖고 있는 div태그로 wrapAll 메서드를 사용하여
  감싸시오.
  3. .wrap all 의 요소에 있는 .items태그들을 .div-imems-wrap 클래스 갖고 있는 div태그로 wrapAll 메서드를 사용하여
  감싸시오.
  4. strong 태그들을 .title 클래스를 갖고 있는 div태그로 wrapAll 메서드를 사용하여 감싸시오.
  */
  // $('.wrap-all p').wrapAll('<div></div>');
  // $('.wrap-all span').wrapAll('<div></div>');
  // $('.wrap-all .items').wrapAll('<div class="div-imems-wrap"></div>');
  // $('strong').wrapAll('<div class="title"></div>');


  //wrapInner()
  //wrapInner method 사용 시 선택한 요소의 자식 요소 모두를 특정 태그로 감싼다.
  $(".wrap-inner").wrapInner("<div class='inner'></div>");

  /*.items의 자식요소들을 wrapInner을 사용하여
  "<a href='http://daum.net'></a>"로 감싸시오.*/
$(".wrap-all .items, .wrap-inner .items").wrapInner("<a href='http://daum.net'></a>");

});
