'use strict'
let t = null;
function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = redText(checkTime(m));  /*함수중복적용*/
  s = redText(checkTime(s));
let timeTag = `<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;

  if( h == 7  || h == 7 && m <= 10 ){
    document.body.style.backgroundImage = 'url(./img/back3.gif)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>기상기상기상!!!!!!!</p> ${timeTag}`
  }else if( h == 7 && m > 12 || h == 7 && m <= 40 ) {
    document.body.style.backgroundImage = 'url(./img/wash.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>샤워중...</p> ${timeTag}`
  }else if( h == 7 && m > 49 || h == 8 && m <= 4 ) {
    document.body.style.backgroundImage = 'url(./img/lunch.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>아침 식사</p> ${timeTag}`
  }else if( h == 8 && m > 19 || h < 8 && m == 0) {
    document.body.style.backgroundImage = 'url(./img/back4.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>~~학원 가는중~~</p> ${timeTag}`
  }else if( h == 12 && m > 49 || h < 15 && m == 0 ) {
    document.body.style.backgroundImage = 'url(./img/lunch.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>점심 식사</p> ${timeTag}`
  }else if( h > 8 && m > 9 || h < 18 && m <= 49 ) {
    document.body.style.backgroundImage = 'url(./img/back2.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p> 수업중 </p> ${timeTag}`
  }else if( h == 17  && m == 50 ){
    document.body.style.backgroundImage = 'url(./img/back5.gif)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `<p>마치는 시간!</p> ${timeTag}`
  }else{
    document.body.style.backgroundImage = 'url(./img/back.jpg)';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('txt').innerHTML = `${timeTag}`
  }
  // }
  // document.getElementById('txt').innerHTML = `${h}:${m}:${s}`
  if(m > 49 && m < 60 ){
    document.querySelector('#txt span:nth-child(3)').style.color = 'red';
  }
  if( s > 49 && s < 60 ) {
    document.querySelector('#txt span:nth-child(4)').style.color = 'red';
  }
  t = setTimeout(startTime, 500);
}

function redText(i) {
  return i;
}

function checkTime(i) {
  if( i < 10 ) {
    i = '0' + i;
  }
  return i;
}


let outPutText = '';

function inputText(){
  outPutText += document.getElementById('inputDate').value;
  timeTag = outPutText;
}
