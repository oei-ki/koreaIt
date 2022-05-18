 'use strict'
// 시간체크하기
const date = new Date();

let date1 = date.getDate();
let minutes = date.getMinutes();// 현재 분단위
let month = date.getMonth();//현재 월단위 0(1월)부터 시작 console.log(month + 1);
let year = date.getFullYear();
let hours = date.getHours();//현재 시간
console.log(date);
console.log(hours);

if(12 < hours){
  alert(`${year}년 ${month + 1}월 ${date1}일 오후 ${hours-12}:${minutes}입니다.`)
}else if(12 > hours){
  alert(`${year}년 ${month}월 ${date1}일 오전 ${hours}:${minutes}입니다.`)
}else{
  alert(`${year}년 ${month}월 ${date1}일 정오입니다.`)
}
