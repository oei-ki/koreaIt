'use strict'
// window.onload = function(){
function getTextFunc(){
  let infoText = "javascript,html,css3,photoshop,xd";
  let aHtml = '<h1>My Skill</h1>';
  // infoText를 substring으로 단어를 개별 추출하고 해당값을 배열에 담아서 aHtml의 변수에
  // 반복구문을 사용하여서 추가(ul) 한 후 document에 있는 요소 .demo element에 출력해주세요.
  // let array = [];
  // array[0] = infoText.substring(0,10);
  // array[1] = infoText.substring(11,15);
  // array[2] = infoText.substring(16,20);
  // array[3] = infoText.substring(21,30);
  // array[4] = infoText.substring(31,33);

let array = infoText.split(',');
console.log(array)

  aHtml += '<ul>';
  for(let i = 0; i < array.length ; i++){
       aHtml += `<li>${i+1}. ${array[i]}</li>`
     }
  aHtml += '</ul>'

  document.getElementsByClassName('demo')[0].innerHTML = aHtml





//   var list ='';
//   list += aHtml;
//   list += '<ul>'
//   for(let i = 0; i < array.length ; i++){
//     list += `<li>${array[i]}</li>`
//   }
//   console.log(list)
//   list += '</ul>'
//
//  document.getElementsByClassName('demo')[0].innerHTML = list;
//
}
