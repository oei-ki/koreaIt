'use strict'
let t = null;

function timeFunc(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkFunc(h)
  m = checkFunc(m)
  s = checkFunc(s)
  
  if( h == 14 && m > 30 || h == 14 &&  m < 51 ){
    document.body.style.background = 'pink';
    document.getElementById('text').innerHTML = `${h}:${m}:${s}`;
  }else if((h == 14 && m > 50) || (h == 15 &&  m == 0) ){
    document.body.style.background = 'skyblue';
    console.log('111');
    document.body.style.color = 'pink'
    document.getElementById('text').innerHTML = `${h}:${m}:${s}`;
  }else if( (h == 15 && m <= 1)|| (h == 15 &&  m < 30)){
    document.body.style.background = 'orange';
    document.body.style.color = 'yellow'
    document.getElementById('text').innerHTML = `${h}:${m}:${s}`;
  }else{
    document.body.style.background = 'black';
    document.body.style.color = 'white'
    document.getElementById('text').innerHTML = `<p>집에 가고싶음</p>${h}:${m}:${s}`;
  }
  t = setTimeout(timeFunc, 500);
}

function checkFunc(i){
  if(i < 10){
    i = '0'+ i
  }
  return i;
}
