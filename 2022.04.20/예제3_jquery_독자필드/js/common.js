$(function(){
  //jquery 실행구문
  //first,first-child/last,last-child 의 비교 예제
  // $('p:first-child').css('color','red'); // p를 자식요소로 갖고 있는 요소의 자식들중 처번재 p를 선택
  // $('p:first').css('color','blue'); //document 전체에서 선택한 요소의 첫번째의 선택

  // $('p:last-child').css('color','pink') // p를 자식요소로 갖고 있는 요소의 자식들 중 마지막p를 선택
  // $('p:last').css('color','skyblue') //document 전체에서 선택한 요소의 마지막번째를 선택



  // even,odd 예제  //인덱스 값이 0 부터 시작한다.css의 even과 odd와는 선택이 다르다.
  // $('li:even').css('color','green');
  // $('li:odd').css('color','pink');

  //eq,gt(great than)/*~~보다 이상*/,lt(less than)/**/ //index 값이 0부터 시작한다.
  // $('li:eq(2)').css('color','red') //해당 인덱스와 같은 위치의 요소를 선택(index는 0부터);
  // $('li:gt(2)').css('color','blue') //greater than eq 기준으로 index가 큰 요소들을 선택
  // console.log($('li:gt(2)').length);
  // $('li:lt(2)').css('color','green');// Less than eq 기준으로 index가 작은 요소들을 선택


  //heading 태그 선택
  // $(':header').css('color','red');
  // $('h1,h6').css('color','blue');


  // contains 문자열로 포함 유무 확인 후 요소 선택
  // $('li:contains("menu1")').css('color','red');
  // $('p:contains("포도")').css('color','violet');
  // $('p:contains("Lorem")').css('color','skyblue');
  // $('p:contains("jqu")').css('color','orange');
  // $('li:contains("4")').css('color','green');
  //
  // let elem = $('li:contains("menu1")'); /*배열로 됨*/
  // console.log(elem);
  // if (elem.length > 0) {
  //   console.log('menu1 존재합니다.');
  // }


  // :has 태그 포함 유무로 요소 선택
  // $('li:has(strong)').css('color','red');
  /*
  1. p태그 갖고 있는 li 텍스트 색상 blue로 변경
  2. span 태그 갖고 있는 li 텍스트 색상 orange로 변경
  3. a 태그 갖고 있는 li 텍스트 색상 green로 변경
  */
  // $('li:has(p)').css('color','blue');
  // $('li:has(span)').css('color','orange');
  $('li:has(a),li:has(a) a').css('color','green');


  // $('li:not(:parent)').css('border','1px solid red');
  //자식 요소를 갖고 있는 요소를 선택(부모)

  // $('li:parent').css('border','1px solid red');
  //부정유사클래스를 사용하여 자식 요소가 존재하지 않는 요소를 선택할 수 있다.


});
