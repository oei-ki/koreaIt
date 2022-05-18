'use strict'
// 배열선언

let korean = [85,75,88,90,95,97,77,80,100,88]
let math = [85,75,88,90,95,97,77,80,90,88]
let english = [85,75,88,87,90,95,77,85,100,88]

function avgFunc(arrayNum){
  let total = 0; //점수의 합계
  let scoreLeng = arrayNum.length;  // 인덱스 갯수 : 학생들 점수
  let scoreAvg; //학생들의 평균점[]

  for( let i = 0; i < scoreLeng/*만족할동안만*/; i++){
    total += arrayNum[i]
  }
  return scoreAvg =  total/scoreLeng;
}
console.log(avgFunc(korean))
console.log(avgFunc(math))
console.log(avgFunc(english))
