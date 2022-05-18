'use strict'
// 숫자나열
// 변수선언
let total = 0; //작은 숫자부터 큰숫자까지 갯수
let inputNum = prompt('숫자를 입력해주세요','숫자');
inputNum  = Number(inputNum);

function sumRepeat(i){  // i 시작하는 숫자, j 끝나는 숫자
//실행코드
  // if( total == 0 ){ //초기실행
  //   total += i;
  // }else if( i == 0 ) { //최대숫자 제한
  //   return 0; //실행을 안하게 함
  // }else{ // 초기 실행이 아니라면 콤마추가
  //   inputNum += i;
  // }
  // i--
  // total++;

  // sumRepeat(inputNum);
  // alert(inputNum);


  if(i < 1){
    return 0;
  }
  total += i;
  i--;
  sumRepeat(i);
}

sumRepeat(inputNum);
alert(total);

// inputnum = 3
// 6
// 5
// 4
// 3
// 2
// 1
