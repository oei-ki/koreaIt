 'use strict'
window.onload = function(){ //윈도우가 로드된 후 실행문 실행
 // 실행문 입력 영역
 let inputTextNum = '이름을 입력해주세요.'
 let nameText = prompt(inputTextNum);
 console.log(nameText);
 // innerHTML
 // innerHTML는 값을 html 타입으로 반환한다.
 // document.body.innerHTML = '<p class="name">' + nameText + '</p>';
 // innerText 그냥 텍스트로 변함
 // document.body.innerText = '<input class="name" placeholder="' + inputTextNum + '" value="">';
 document.body.innerHTML = '<input class="name" placeholder="' + inputTextNum + '" value="">';
// ``으로 문자 변수 조합 표기하기
 document.body.innerHTML = `<input class="name" placeholder="${inputTextNum}" value="${nameText}">`;
 
};
