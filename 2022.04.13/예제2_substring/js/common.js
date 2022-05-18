'use strict'
//substring 사용
let a = '1234567890';
// let abc = a.substring(2,5); //결과값:345
//let abc = a.substring(5,2);   //결과값이 동일하게 출력된다.
//매개변수 중 작은 숫자가 시작인덱스, 큰 숫자가 종료인덱스(순서상관없음)
// let abc = a.substring(-5);결과값:1234567890
// let abc = a.substring(0); 결과값:1234567890

let stringText = 'hello this is string';
//substring() 메서드 사용 'hi' 값을 console.log로 출력
// console.log(`${stringText.substring(0,1)}${stringText.substring(8,9)}`)

//출력 => 나이 : 20세, 이름 : 홍길동, 지역 : 대구
let infoText = '안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세 입니다.'
let substring01 = infoText.substring(25,27); //나이
let substring02 = infoText.substring(29,32); //20세
let substring03 = infoText.substring(17,20); //홍길동
let substring04 = infoText.substring(10,12); //대구
console.log(`${substring01} : ${substring02}, 이름 : ${substring03}, 지역 : ${substring04}`)
