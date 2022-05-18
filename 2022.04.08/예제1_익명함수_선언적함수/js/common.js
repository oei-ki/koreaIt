'use strict'
//함수 선언
// var repeat = function(){
//   alert('나는 익명함수 입니다.');
// }
// // console.log(typeof(repeat))
// // repeat();
//
// function repeat(){
//   alert('나는 선언적 함수입니다.')
// }
// // console.log(typeof(repeat))
//  repeat();  //함수를 호출하면 익명함수가 실행된다. 이유 : 선언적 함수가 먼저 생성되고 익명함수가 나중에 생성되기 때문이다. 호이스팅으로 나중에 생성된 것은 선언영역의 아래쪽에 배치되기 때문이다.


//전역변수 / 지역변수
//전역변수 : num
// 지역변수 : i,j,sumCalc,checkNum
let num = 10;

function testFunction(/*매개변수*/i,j){
  let checkNum = 20;
  let sumCalc = i + j + num + checkNum;
  return sumCalc
}
// console.log(testFunction(1,2));

let sumTotal = testFunction(1,0); //
console.log(`함수에서 반환한 값을 출력 : ${sumTotal}`);  //number
