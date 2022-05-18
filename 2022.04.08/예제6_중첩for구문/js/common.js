'use strict'
// let array = ['a', 'b', 'c'] //일차원 배열
// console.log(array[0])

//중첩 for구문
// 다중배열 or 다차원 배열
// let arrayNum = [1,2,3];
// let array = [['가', '나', '다'],'b' ,['제주도', '강원도','포항']]
// console.log(arrayNum[0])
// console.log(array[2].length)

// for (let i = 0; i < 10; i++) {
//   /*실행문*/
//   console.log(i);
//   for(let j = 0; j < 5;j++){
//     console.log(`중첩for ${j}`);
//   }
// }

let shoppingItems = [['반바지','슬랙스'],['점퍼','조끼'],['슬립온','워커','스니커즈'],['크로스백','백팩','클러치백']];
let gtLeng = shoppingItems.length;

for(let i = 0; i < gtLeng; i++){
  // console.log(shoppingItems[i])
    if( i == 0){ //바지 섹션
      // console.log(shoppingItems[0])
      for(let j = 0; j < shoppingItems[i].length ;j++){
        if(j==0){
          console.log(shoppingItems[i][j]);
        }
      }

    }else if( i == 2 ){ //신발 섹션
      for(let j = 0; j < shoppingItems[i].length ;j++){
        if(j==2){
          console.log(shoppingItems[i][j]);
        }
      }
    }else if( i == 3 ){ //가방 섹션
      outPutItems(i,1)
    }
}

// items 가져오기 함수

function outPutItems(currentArray,checkIndex){
  for(let j = 0; j < shoppingItems[currentArray].length ;j++){
    if(j == checkIndex){
      console.log(shoppingItems[currentArray][j]);
    }
  }
}
