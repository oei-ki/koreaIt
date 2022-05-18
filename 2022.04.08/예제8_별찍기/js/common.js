'use strict'
//중첩 for구문
//삼각형, 피라미드형 별찍기

let star= '';

for(let i = 0 ; i < 15; i++){
  for(let j = 15 ; j > i ;j--){
  star += ' ';
  }
  for(let k = 0; k < 2*i-1; k++ ){
    star+='*';
  }
  star += '\n'
}
for(let i = 14 ; i >= 0; i--){
  for(let j = 14 ; j > i ;j--){
  star += ' ';
  }
  for(let k = 0; k < 2*i-1; k++ ){
    star+='*';
  }
  star += '\n'
}
console.log(star)
