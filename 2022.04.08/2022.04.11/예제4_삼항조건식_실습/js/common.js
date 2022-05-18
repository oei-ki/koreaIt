'use strict'
//삼항조건식

// 숫자를 입력받아 짝수 or 홀수를 판별하는 조건문

let num = prompt('숫자를 입력해주세요', '숫자')
num = Number(num);
// if(num%2 == 0){
//   alert(num + '은 짝수 입니다.')
// }else{
//   alert(num + '은 홀수 입니다.')
// } 위아래 동일

num%2 == 0 /*if 조건문*/? alert(num+'은 짝수')/*true*/ : alert(num+'는 홀수')/*false*/ ;

// let absNum = Math.abs(num); //숫자를 절대값으로 반환
// console.log(absNum)
// let roundNum = Math.round(num) //반올림
// console.log(roundNum)
//floor//내림 ceil//올림
