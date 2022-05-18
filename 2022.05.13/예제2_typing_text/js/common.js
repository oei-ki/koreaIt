'use strict'
function autoType(elementClass, typingSpeed){
  // console.log(elementClass+','+typingSpeed);
  let thisElem = $(elementClass);
  console.log(thisElem);
  thisElem.prepend('<div class="cursor" style="left:0;right:initial;"></div>')
  thisElem = thisElem.find(".text");
  let text = thisElem.text().trim().split('') /*trim : 양끝의 공백을 정리함*//*문자열만듬*/
  console.log(text);
  thisElem.text("");
  let amntOfChars = text.length ;
  console.log(amntOfChars);
  let newString = ""; /*나올 문자열을 넣을 변수*/

  setTimeout(function(){
    thisElem.css("opacity",1);
    thisElem.prev().removeAttr("style");
    // console.log(thisElem.prev());
    for(let i = 0; i < amntOfChars ;i++){
      (function(count, char){ /*즉시실행함수*/
        setTimeout(function(){/*뿌리는 시간*/
          newString += char;
          thisElem.text(newString);
        },count*typingSpeed)
      })(i+1, text[i])
    }
  },1500); /*시작시간*/

}
$(function(){
  autoType(".typing",200);
});
