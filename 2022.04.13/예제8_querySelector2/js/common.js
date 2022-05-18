'use strict'
// function textColorChange() {
//   // document.getElementsByTagName('p')[0].style.color= 'red';
//   // document.querySelector('.txt').style.color= 'blue'; //class . id #붙여서 호출
//   let txtNum = document.querySelectorAll('.txt')//class name "txt"인 배열리스트 가져온다.
//   let txtNumLeng = txtNum.length;  //배열의 개수
//   console.log(txtNum.length);
// for(let i = 0; i< txtNumLeng; i++){
//   txtNum[i].style.color = "red";
//   }
// }
//query Selector
let num = 0;
function textMove(){
  // num = num + 10;
  num += 10;
  console.log(num)
  let txtNum = document.querySelector( 'li .txt' ); // calss name "txt"인 배열리스트 가져옴
  txtNum.style.backgroundColor = 'red';
  txtNum.style.position = 'relative'
  txtNum.style.left = `${num}px`
  txtNum.style.top = `${num}px`
}
