'use strict'
/*
- 표기방법에 따른 분류
익명함수
function(){}
선언적 함수
function testFunc(){}

- 사용방법에 따른 분류
재귀함수
function testFunc(){
  testFunc();
}
콜백함수 : 다른 함수의 매개변수로 사용되거나, event로 특정시점에 호출되는 함수. 비동기적으로 작동될 때 사용
*/

function avgCalc(a,b,c) {
  let sum = a + b;
  c(sum) //함수 실행
  // return sum;
}

// 익명함수로 콜백함수 호출
// console.log(avgCalc(1,2));
avgCalc(10,30,function(num){  // num == sum
 let avg = num/2;
 console.log(avg);
});

// arrow function 콜백함수 호출
avgCalc(20,40,(num) => {
  let avg = num/2;
  console.log(avg);
})

// 선언적 함수로 콜백함수 부르기
function avg(num) {
  let avg = num/2;
  console.log(avg);
}

avgCalc(50,100,avg)
/*
  let sum = 50 + 100;
  avg(sum)
*/

window.onload = function(){
  document.getElementById('wrap').innerHTML = myFunction();
  function myFunction(){
    return this; // this == window객체
  }
}
//1
function areaFunc(a,b,c){
  let multi = a*b
  c(multi);
}

function squareFunc(num){
  console.log(num);
}
areaFunc(10,10,squareFunc)

//2.return사용
function square(a,b,c){
  let width = a*b
  return c(width);
}

function width(num){
  console.log(num);
}
square(10,20,width)
