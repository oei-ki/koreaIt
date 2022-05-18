'use strict'
// 배열 선언
// let array = [123,345,567];
// let lastIndex = array.length - 1
// console.log(array.length - 1 );
// console.log(`첫번째 배열값은 ${array[0]}입니다.`);
// console.log(`마지막 배열값은 ${array[lastIndex]}입니다.`);

// let inputText = prompt('과일을 입력해주세요.','과일명');
const myFruits = '포도';
let count = 0;
let fruits = ['사과','배','수박','포도'];
// fruits.push('딸기'); // 배열의 마지막에 요소를 추가 : push
// fruits.push('멜론');
// fruits.push('키위');
// fruits.push('체리');
// console.log(fruits);
//fruits.pop(); // 배열의 마지막 요소를 제거 : pop
// fruits.shift(); //배열의 첫번째 요소를 추출하고 삭제하는 메서드;
// console.log(fruits.shift());
// console.log(fruits.unshift('aa')); // 반환값 : 전체 배열의 길이를 반환한다.
// console.log(fruits);
//fruits.splice(0,0,'키위');  //fruits.shift('키위');
// console.log(fruits.length);
// fruits.splice(fruits.length , 0, '참외'); //fruits.push('참외')
// console.log(fruits.splice(fruits.length , 0, '참외'));
// console.log(fruits);

// alert(`총 과일의 개수는 ${fruits.length}개 입니다.`);


// 함수를 선언한다.
// 재귀함수 : 하나의 함수를 반복하여 작동하는 함수.
function checkFunc() {
  // 실행코드 작성 영역

  if(count<fruits.length){
    console.log(fruits[count]);
    if(myFruits == fruits[count]) {
      console.log(`${fruits[count]}는 제가 좋아하는 과일 입니다.`)
    }
    count++
    checkFunc();
  }else{
    alert('더 이상 과일이 없습니다.')
  }
}
// 함수를 호출한다.
checkFunc();
