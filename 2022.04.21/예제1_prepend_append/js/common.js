$(function(){
  //script 영역 prepend(), append() 사용예
  // prepend() 사용예
  // let elemNum = $('p#first');
  // elemNum.prepend('<span>hi!!<span>');  /*맨앞 html에 삽입*/
  // //append() 사용예
  // elemNum.append('<sapn>have a good day!!</sapn>');


  /*
  p 태그의 총 개수 3게
  각 각의 p 태그의 자식요소의 제일 앞쪽에 '<strong>kind: </strong>' 를 추가하시오
  for 구문을 사용하여 추가.
  */
  // let pLeng = $('p').length;
  // // $('p:nth-child(1)').prepend('<strong>kind: </strong>');
  // for(let i = 0; i < pLeng ; i++){
  //   $('p:nth-child('+(i+1)+')').prepend ('<strong>kind: </strong>');
  // }

  /*
  p 태그의 총 개수 3게
  각 각의 p 태그의 자식요소의 제일 뒷쪽에 '<br><strong>add </strong>' 를 추가하시오
  for 구문(초기값을 1로 시작)을 사용하여 추가
  */
  // for(let i = 1; i < pLeng ;i++){
  //   let count = i + 1;
  //   $('p:nth-child('+count+')').append('<br><strong>add </strong>')
  // }

  // 추가한 img 코드를 배열에 담고 반복구문으로 출력
  let arrayNum = [];
  arrayNum.push('<img src="./img/bolt.png">')
  arrayNum.push('<img src="./img/build.png">')
  arrayNum.push('<img src="./img/paid.png">')
  arrayNum.push('<img src="./img/watch.png">')
// for(let i = 0 ; i <arrayNum.length ; i++ ){
//   let count = i + 1;
//   $('ul li:nth-child('+count+') a').prepend(arrayNum[i]);
// }

  // let elem = $('ul li');
  // console.log($('ul li').find('a'));

  //위코드를 eq() 명령어(methods)를 사용하여 변경하시오

  $('ul li').eq(0).find('a').prepend(arrayNum[0]);
  $('ul li').eq(1).find('a').prepend(arrayNum[1]);
  $('ul li').eq(2).find('a').prepend(arrayNum[2]);
  $('ul li').eq(3).find('a').prepend(arrayNum[3]);

  for(let i = 0 ; i < arrayNum.length ; i++ ){
    $('ul li').eq(i),find('a').prepend(arrayNum[i]);
  }


});
