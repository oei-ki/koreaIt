'use strict'
function chattingFunc(e){/*e==this(html)*/
  console.log(e.previousElementSibling.value); /*읽기전용속성*/
  let elem = document.querySelectorAll('.chat-box');
  let inputTxt = e.previousElementSibling.value;
  let htmlTxt = '';
  htmlTxt = elem[0].innerHTML;  //기존 채딩 목록을 가져옴
  htmlTxt += `<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`;
  elem[0].innerHTML = htmlTxt
}
