'use strict'
function sideMenuSlide(){
  let elem = document.querySelector('#sideMenu')
  let checkNum = elem.getAttribute('class');
  elem.classList.toggle('on') /*toggle: class를 추가했다가 뺏다가 하는거?*/



  // if(document.querySelector('#sideMenu').getAttribute('class') === 'on'){ //on class가 있을때
  //   document.querySelector('#sideMenu').classList.remove('on')
  //   //on을 삭제하는 코드
  // }else{ //on class가 없을때
  //   document.querySelector('#sideMenu').classList.add('on')
  //   //on을 추가하는 코드
  // }
}
