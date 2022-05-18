'use strict'
// class list
function textFunc(){
  let leng = document.querySelector('#text').classList;
  console.log(leng) /*class의 목록을 배열로 가져옴*/
  /*contains method는 classList에 해당 클래스가 포함되어있는지 여부를 확인하여 boolean type으로 반환한다*/
  let bulNum = document.querySelector('#sideMenu').classList.contains('on');
  console.log(bulNum)

  }

function sideMenuSlide(){
  let elem = document.querySelector('#sideMenu');
  let activeNum = elem.classList.contains('on');
  if(activeNum){
    elem.classList.remove('on');
  }else{
    elem.classList.add('on')
  }

  // let bulNum = document.querySelector('#sideMenu').classList.contains('on');
  //   if(bulNum){
  //     document.querySelector('#sideMenu').classList.remove('on');
  //   }else{
  //     document.querySelector('#sideMenu').classList.add('on')
  //   }
}
