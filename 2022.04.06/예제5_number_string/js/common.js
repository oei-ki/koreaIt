 'use strict'
 // number string test
window.onload = function(){
  let num = 1; //자료형 number
  let textNum = '안녕하세요.'
  let numberVar = 10; //자료형 number
  // console.log(num + numberVar);
  let changeString = String(num); //자료형을 문자형으로 바꿈
  let changeNumber = null;
  // console.log(changeString + numberVar);
  // console.log( '값 : ' + changeString + ', 데이터타입 : ' + typeof(changeString));
  changeString += numberVar; //결과값 문자타입 110;
  // changeString = changeString + numberVar;
  console.log(changeString);
  changeNumber = Number(changeString);
  console.log( '값 : ' + (changeNumber + 20) + ', 데이터타입 : ' + typeof(changeNumber));
}
