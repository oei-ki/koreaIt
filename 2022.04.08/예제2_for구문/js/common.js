'use strict'
//for 구문
// let arrayFruits = new Array();  //생성자로 배열 생성
// arrayFruits.push('사과', '배', '수박', '포도', '키위', '레몬');
// let arrayFruits = ['사과', '배', '수박', '포도', '키위', '레몬'];
// // console.log(`${arrayFruits[0]},${arrayFruits[1]},${arrayFruits[2]}...`)
// for( let i = 0; i < arrayFruits.length; i++){
//   console.log(`${arrayFruits[i]}`);
// }

let arrayFruits = ['사과', '배', '수박', '포도', '키위', '수박', '레몬'];

// let fruits = prompt('과일을 입력하세요','과일명');
// for( let i = 0; i < arrayFruits.length; i++){
//   if(fruits == arrayFruits[i]){
//     alert(`맛있는 ${fruits}`);
//   }
// }

// for구문에서 특정 구간에서 for구문 정지
// let outPut = '';
// for (var i = 0; i < 10; i++) {
//   /*실행구문*/
//   outPut += '@';
//   console.log(outPut);
//   if( i == 5 ){ //0부터 시작
//     console.log('여섯번째 입니다.');
//     break;
//   }
// }


//재고확인
let checkNum = 0;  // 재고가 없다. 1일 떄는 재고가 있다.
let fruits = prompt('과일을 입력하세요','과일명');
for (var i = arrayFruits.length -1; i >= 0; i--) { // 역으로 내려감
  if(fruits == arrayFruits[i]){  //재고가 있다.
    alert(`맛있는 ${arrayFruits[i]}`);
    checkNum = 1;
    // break;  //첫번째 재고 확인 후 종료
  }else if(i == 0){  //재고확인을 마친 마지막 i 값
    console.log(`재고확인 : ${checkNum}`);
    if(checkNum == 0)
      alert(`해당 상품의 재고가 없습니다.`)
  }
}
