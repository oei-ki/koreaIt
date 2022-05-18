'use strict'
// 변수선언
let number = prompt('숫자를 입력하세요','숫자');
number = Number(number);

const numCheck = 5; // 범위 조건 변수
const numCheck2 = 3; // 배수 조건 변수

if( number < numCheck ){
  alert('숫자' + number + '은 5보다 작습니다.');
  if( number % numCheck2 == 0 ) {
    alert('숫자' + number + '은 ' + numCheck2 + '의 배수입니다.');
  }else if( number != numCheck2 ) {
    alert('입력한 값은 ' + numCheck2 + '과 같지 않습니다.');
  }
}
