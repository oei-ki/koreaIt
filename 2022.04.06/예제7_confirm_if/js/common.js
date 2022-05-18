 'use strict'
// if(조건문){
//   실행문
// }

// if(점심시간 == true){
//   밥을 먹는다.
// }else if(저녁시간){
//   집으로 간다.
// }else {
//   수업을 한다.
// }

// confirm test
let inputText = confirm('회원가입을 하시겠습니까?');
console.log(inputText);
if(inputText){
  alert('회원가입이 완료 되었습니다.');
}else{
  alert('회원가입이 취소 되었습니다.');
}
// if(inputText == true){
//   alert('회원가입이 완료 되었습니다.');
// }else if( inputText == false ){
//   alert('회원가입이 취소 되었습니다.');
// }
