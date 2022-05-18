'use strict'
// 변수선언
let array = ['사과', '배', '수박', '포도', '키위', '레몬'];
// let array = new Array(); 생성자로 생성도 가능
let obj = { car : '승용차', phone : 'iphone', house: '아파트' }
// let obj = new Object();
// console.log(array)
// console.log(obj)
// console.log(obj.house)
// console.log(obj['house'])

for(let items/*i*/ of array ) { // 반복 가능한 객체(iterable), 배열도 객체이며 array, set, map 등으로 사용할 수 있다.
  console.log('for of 구문으로 출력하기 : '+items)
}

for(let items in array){
  console.log('for in 구문으로 index 출력하기: ' + items)
  console.log('for in 구문으로 value 출력하기 : ' + array[items])
}

// for(let items of obj) { //일반 객체타입은 iterable 하지 않기 때문에 for of를 사용할 수 없다.
//   console.log('for of 구문으로 출력하기 : ' + items);
// }

for( let [key, val] of Object.entries(obj)) { // 일반 객체타입을 interable 하게 사용하기 ;
    console.log('for of 구문으로 출력하기: key: ' + key + ', value : ' + val)
}

for(let items in obj) {
  console.log('for in 구문으로 index 출력하기 : ' + items);
  console.log('for in 구문으로 value 출력하기 : ' + obj[items]);
  // console.log('for in 구문으로 value 출력하기 : ' + obj.house);  //string타입으로 인식해서 안됨
}

let userMap = new Map(); // 키-값 쌍을 보유하고 키의 원래 삽입 순서를 기억
userMap.set('test','tttttt', '핸드폰');
// userMap.set('car','트럭');
console.log(userMap);
console.log(userMap.has('test'));


if(userMap.has('test')){
  console.log('test는 존재합니다.')
  console.log(userMap.get('test'))
}
// for(let items of userMap){
//   console.log(items)
// }
