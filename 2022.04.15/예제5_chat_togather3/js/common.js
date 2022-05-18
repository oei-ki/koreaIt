'use strict'
let inputTxt = '';

function inputChat(event){ //  키보드 타이핑 및 엔터 버튼 실행 event==input
  // console.log(window.event.keyCode)
  if(window.event.keyCode == 13){ // 엔터키를 사용했을 때  keyCode:키보드코드 엔터값이 13
    if(event.value != ''){ // 입력창이 비어있지 않을 때
      chattingFunc(event, 0);
      clearText(inputTxt,event, 0) /*this가 없다면 event, this가 있으므로 요소 그 자체를 의미한다*/
    }
  }
}

function sendTxt(e) { //보내기 버튼 실행     /*previousElementSibling 읽기 전용 속성, 앞에있는 요소*/
  if( e.previousElementSibling.value != '' ) { //입력창이 비어있지 않을때 실행 // e.앞의 값을 찾기위해 html에 this입력
    chattingFunc(e,1); //입력값 위로 올리는함수 여기서 e는 본인?
    clearText(inputTxt,e,1); /*e==button*/  //0,1로 임의로 구분함
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
  if( i == 1 ){//보내기 버튼으로 입력
    inputTxt = e.previousElementSibling.value;
  }else {//엔터키로 입력
    inputTxt = e.value;
  }
  // console.log(elem[0].scrollTop);

  let thisClassName = e.getAttribute('class');
  let elem = document.querySelectorAll('.chat-box');
  let elemLeng = elem.length; /*채팅창 갯수*/
  let txt = [];  //채팅창에서 입력값 받기
  let htmlTxt = []; // 채팅창 내용 담을 변수
  console.log(thisClassName);

  for(let i = 0; i<elemLeng; i++){
    htmlTxt[i] = elem[i].innerHTML;  //기존 채딩 목록을 가져옴
  }

  // htmlTxt[0] : user_a 채팅창목록
  // htmlTxt[1] : user_b채팅창목록
  // htmlTxt[2] : user_c 채팅창목록

  if(thisClassName == 'user-a'){
    txt.push(`<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`);//  user_a 채팅창
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);  //  user_b 채팅창
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);  //  user_c 채팅창
  }else if( thisClassName == 'user-b'){
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
  }else{
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c right"><div class="txt">${inputTxt}</div></div>`);
  }

  for(let i = 0; i < elemLeng ;i++){
    htmlTxt[i] += txt[i]; //기존 채팅창 내용에 입력된 채팅창 내용을 더함?
    elem[i].innerHTML = htmlTxt[i]  //입력된 값을 포함하여 대화창으로 다시 입력
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight ;  //스크롤이 생겨서 최신 대화내용이 스크롤 영역으로 들어가서 안 보일 경우
  }
}
