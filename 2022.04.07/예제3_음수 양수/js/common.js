'use strict'
// 변수선언
let num = prompt('숫자를 입력하세요', '숫자');
num = Number(num);

if( num < 0 ){
  alert(`입력하신 숫자 ${num}은 음수입니다.`);
}else if( num > 0 ) {
  alert(`입력하신 숫자 ${num}은 양수입니다,`);
}else {
  alert(`입력하신 숫자 0입니다.`);
}
