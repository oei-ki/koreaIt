 'use strict'
// number string prompt test
// const num = 10;
// let inputText = prompt('숫자를 입력해주세요.', '숫자'); //1.타이틀2.placeholder
// console.log(typeof(inputText));
// console.log(num + Number(inputText));
// let changeNumber = Number(inputText);
// changeNumber += num;
// console.log(changeNumber);


// 반지름 입력값에 따라 원의 둘레 구하기
  const pi = 3.14159265;
  let circle = null; //원의 둘레값
  let radiusNum = prompt('원의 둘레 구하기', '반지름을 입력해주세요');
  radiusNum = Number(radiusNum);
  console.log(`입력한 반지름은 : ${radiusNum}, 데이터 타입 : ${typeof(radiusNum)}`);
  //둘레 구하는 영역 (영역을 나눠주는게 좋음)
  circle = 2* pi * radiusNum;
  alert(`반지름은  ${radiusNum}이고, 원의 둘레는 ${circle}입니다.`);
