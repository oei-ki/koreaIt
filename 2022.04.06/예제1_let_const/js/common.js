'use strict' //엄격한 모드로 관리?실수 방지?
// var, let, const test
var numVar; //변수 선언
numVar = 10; //변수 값 할당 및 초기화
console.log(numVar);
var numVar; //재선언
console.log(numVar);

let numLet; //변수 선언
numLet = 15; //변수 값 할당 및 초기화
console.log(numLet);
// let numLet;  재선언 불가
numLet = 20; //재할당은 가능함

const numConst = 50; //변수 선언 및 할당 무조건 초기에 값을 넣어줘야함.선언과 동시에 변수의 값을 초기화 시켜야 한다.
// numConst = 100;
// const numConst = 300;
console.log(numConst);
