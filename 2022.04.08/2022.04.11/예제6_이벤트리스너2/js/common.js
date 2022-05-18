'use strict'
let outPutText = '';

function getText(){
  console.log(` 자료형 : ${typeof(outPutText)}, ${outPutText}`)
  outPutText += document.getElementById('fname').value;
  if(outPutText != ''){
    outPutText += '<br>'
  }

  // if(outPutText == ''){
  //   outPutText += document.getElementById('fname').value;
  // }else{
  //   outPutText += '<br>'+document.getElementById('fname').value;
  // }

  document.getElementById('textarea').innerHTML = outPutText;

}

let domStyle = document.getElementById('textarea').style
domStyle.backgroundColor = 'blue';
domStyle.color = 'pink'
domStyle.border = '1px solid pink'
domStyle.fontSize = '32px'
domStyle.paddingLeft = '10px'
console.log(domStyle)


// document.getElementById('btn').addEventListener('click', getText/*함수명*/);  or HTML onclick사용
