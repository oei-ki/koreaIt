'use strict'
// 이벤트 리스너 함수타입 사용방법 1: 선언적 함수
// function getElementNum() {
//   document.getElementById('box').innerHTML = 'test'
// }
// document.getElementById('btn')/*id로 Element주소를 가져오겠다? */.addEventListener('click'/*매개변수*/,getElementNum/*함수?*/)
/*addEventListener(a,b,c)
a매개변수: string 타입 이벤트명을 넣어준다.
b매개변수: function 타입으로 값을 넣어준다.
c매개변수: boolean 타입 입력 즉, true or false
default : false (버블링),true (캡쳐링);
*/
function clickBtn(btn, elem, text){
  let btnSelect = document.getElementById(btn);
  let elemSelect = document.getElementById(elem);
  btnSelect.addEventListener('click',function(){
    elemSelect.innerHTML = text;
  })
}

clickBtn('btn','box','안녕');

// 이벤트 리스너 함수타입 사용방법 2: 익명함수
// document.getElementById('btn').addEventListener('click',function(){
//   document.getElementById('box').innerHTML = '익명함수 타입'
// });
