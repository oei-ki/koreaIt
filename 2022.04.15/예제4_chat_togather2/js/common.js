'use strict'
let inputTxt = '';

function inputChat(event){ //  키보드 타이핑 및 엔터 버튼 실행
  // console.log(window.event.keyCode)
  if(window.event.keyCode == 13){ // 엔터키를 사용했을 때
    if(event.value != ''){ // 입력창이 비어있지 않을 때
      chattingFunc(event,0);
      clearText(inputTxt,event,0)
    }
  }
}

function sendTxt(e) { //보내기 버튼 실행
  if( e.previousElementSibling.value != '' ) { //입력창이 비어있지 않을때 실행 // e.앞의 값
    chattingFunc(e,1); //입력값 위로 올리는함수 여기서 e는 본인?
    clearText(inputTxt,e,1) /*e==button?*/
  }
}

function clearText(t,e,i) {  // t : htmlTxt,event
  t = '';
  inputTxt = t;
  if( i == 1 ) { // send버튼이..
    e.previousElementSibling.value = '';
  }else {
    e.value = '';
  }
  // console.log(`전역변수 채팅목록 : ${htmlTxt}, 입력창 초기화 확인 : ${e.previousElementSibling.value}`);
}

function chattingFunc(e,i){/*e==this(html)*/
  // console.log(e.previousElementSibling.value); /*읽기전용속성*/
  let elem = document.querySelectorAll('.chat-box');
  if( i == 1 ){//보내기 버튼으로 입력
    inputTxt = e.previousElementSibling.value;
  }else {//엔터키로 입력
    inputTxt = e.value;
  }
  let htmlTxt = elem[0].innerHTML;  //기존 채딩 목록을 가져옴
  htmlTxt += `<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`;
  elem[0].innerHTML = htmlTxt
  console.log(elem[0].scrollTop);
  elem[0].scrollTop = elem[0].scrollHeight - elem[0].offsetHeight ;
}
