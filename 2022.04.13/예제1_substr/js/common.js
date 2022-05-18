'use strict'
//subsrt 사용
//배열과 문자열'' 배열임
let nameStr = ['박길동', '홍길동', '이길동'];
let str = 'hello javascript'; //string 문자열
let strNum = '20200413';
let numberText = '1234567890';
// console.log(str[5]) //문자열도 배열이다
// console.log(numberText.substr(1,1))  //substr(시작인덱스,길이)
// console.log(str.substr(0)) // 전체출력

let ntNum_01 = numberText.substr(1,1);
console.log(ntNum_01);

let str01 = strNum.substr(6,2);
let str02 = numberText.substr(1,2);

console.log(`오늘은 ${str01}입니다. \n저는 ${nameStr[0]}입니다.\n저는 ${str02}세입니다.`)
