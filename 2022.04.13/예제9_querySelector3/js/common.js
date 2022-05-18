'use strict'
// function innerTxt() {  //텍스트 출력 함수
//   document.querySelector('.content > p').innerHTML = 'hello query selector!!'
// }

let outPutText = '';

function innerTxt(){
  let outPutText = document.querySelector('#input-text').value;
  document.querySelector('.content h2 p').innerHTML = outPutText;
}
