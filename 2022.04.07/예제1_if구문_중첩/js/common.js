'use strict'
// 시간체크하기
const date = new Date();
let hours = date.getHours();//현재 시간

//조건문
if(hours < 11){//11시 이전 아침식사
  alert('아침 먹을 시간입니다.')
}else{// hours < 11이 false이고, hours >= 11 true 일 때
 if(hours < 15) {//hours >= 11 이고, hours < 15
   alert('점심 먹을 시간입니다.')
 }else {//hours < 15 false이고 hours >= 15이고, hours <= 24
   alert('저녁 먹을 시간입니다.')
 }
}
