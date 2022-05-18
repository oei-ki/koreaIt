'use strict'
// 숫자나열
// 변수선언
let num = '';  //숫자를 담을 변수
let count = 0; //작은 숫자부터 큰숫자까지 갯수

function repeat(i,j){  // i 시작하는 숫자, j 끝나는 숫자
//실행코드
  if( count == 0 ){ //초기실행
    num += i;
  }else if( i > j ) { //최대숫자 제한
    return 0; //실행을 안하게 함?
  }else{ // 초기 실행이 아니라면 콤마추가
    num += ','+i;
  }

  i++
  count++;
  repeat(i,j); //재귀함수
}
repeat(50, 80);
console.log(num);
