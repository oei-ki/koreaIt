'use strict'
// 변수선언
let num = prompt('학점을 입력하세요', '학점');

if( num == ''||num === '학점'){
  alert('입력된 숫자가 없습니다.');
}else{
  if(isNaN(num)){
  alert('영문자/한글/특수문자는 사용할 수 없습니다. 숫자를 입력해주세요')
  num = Number(num);
  }
   else if(num >= 4.3 && num <= 4.5){
    alert('A+');
  }else if(num >= 3.9 && num <= 4.2){
    alert('A0');
  }else if(num >= 3.5 && num <= 3.8){
    alert('A-');
  }else if(num >= 3.2 && num <= 3.4){
    alert('B+');
  }else if(num >= 2.9 && num <= 3.1){
    alert('B0');
  }else if(num >= 2.5 && num <= 2.8){
    alert('B-');
  }else if(num >= 2.2 && num <= 2.4){
    alert('C+');
  }else if(num >= 1.9 && num <= 2.1){
    alert('C0');
  }else if(num >= 1.5 && num <= 1.8){
    alert('C-');
  }else if(num >= 1.2 && num <= 1.4){
    alert('D+');
  }else if(num >= 0.9 && num <= 1.1){
    alert('D0');
  }else if(num >= 0.1 && num <= 0.8){
    alert('D-');
  }else if(num == 0.0){
    alert('F : 재수강 신청 하세요!');
  }else {
    alert('학점을 다시 입력해주세요');
  }
}
