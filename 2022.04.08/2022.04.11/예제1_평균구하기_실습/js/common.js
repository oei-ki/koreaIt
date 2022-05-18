window.onload = function(){ //head에서 실행하게 만드는?
  //실행문
let name = ['홍길동', '박길동', '김길동', '이길동', '최길동']
let height = [175, 180, 190, 185, 178]
let age = [30, 18, 21, 35, 38]
let score = [85, 88, 90, 82, 95]

function sumFunc(arrayNum){
  let total = 0;
  for( let i = 0; i < arrayNum.length; i++){
    total += arrayNum[i]
  }
  return total
}

function avgFunc(arrayNum){
  let avg;
 return avg = sumFunc(arrayNum)/arrayNum.length;
}


var list='';
list += `<table><tr><th>이름</th><th>키</th><th>나이</th><th>점수</th></tr>`
for(let i = 0; i <5; i++){
  list += `<tr><td>${name[i]}</td><td>${height[i]}</td><td>${age[i]}</td><td>${score[i]}</td></tr>`
}
list += `<tr><td>평균</td><td>${avgFunc(height)}</td><td>${avgFunc(age)}</td><td>${avgFunc(score)}</td></tr>`
list += `<tr><td>${sumFunc(name)}</td><td>${sumFunc(height)}</td><td>${sumFunc(age)}</td><td>${sumFunc(score)}</td></tr>`

list += `</table>`

document.body.innerHTML = list;

}
