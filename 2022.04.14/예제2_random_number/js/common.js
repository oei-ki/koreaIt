'use strict'
let num = prompt('1~10숫자를 입력해주세요','숫자');
let randomNum = Math.random()*10 //난수(랜덤숫자)받기
let sumNum = num + randomNum;
if( sumNum > 10 ) {
  num = sumNum - 10;
}else if( sumNum => 10 ){
  num = sumNum;
}
num = Math.ceil(num);//소수점 아래 올림

// Math.floor() : 소수점 아래 버림
// Math.ceil() : 소수점 아래 올림
// Math.round() : 소수점 아래 반올림
// console.log(Math.ceil(Math.random()*10))

function getNumber() {
  document.querySelectorAll('div')[num].setAttribute('class','selected')/*setAttribute('class',값)*/
}
