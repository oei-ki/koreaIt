'use strict'
//scroll top
let numY = 0; //y축 scroll 변수
let numX = 0; //x축 scroll 변수
let elem = document.querySelector('#mydiv');
let ctnElem = document.querySelector('#content');

//y축 .scroll 작동 함수
function scrollTopFunc(){
  // numY = numY + 10;
  numY += 10;
  let elem = document.querySelector('#mydiv');
  elem.scrollTop = numY;
  console.log(numY)
  // console.log(elem.scrollTop)
  // console.log(elem.scrollTop); /*scrollTop 스크롤 내리는 값*/
  // console.log(`scroll height : ${elem.scrollHeight}, offset height : ${elem.offsetHeight}`);
  // console.log(`scroll width: ${elem.scrollWidth}, offset width : ${elem.offsetWidth}`);
}

function scrollBottomFunc() {
  numY -= 10;
   if( numY < 0 ){
     numY = 0;
   }
  elem.scrollTop = numY;
  console.log(numY)
}

//x축 scroll 작동 함수
function scrollRightFunc(){
  numX += 10;
  elem.scrollLeft = numX;
  console.log(ctnElem.offsetWidth);
  console.log(numX);
  console.log(ctnElem.scrollLeft);
}

function scrollLeftFunc(){
  numX -= 10;
   if( numX < 0 ){
     numX = 0;
   }
  elem.scrollLeft = numX;
  // console.log(numX);
  // console.log(ctnElem.offsetWidth);
}
