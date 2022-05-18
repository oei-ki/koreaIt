 'use strict'
const cash = 10000//내 보유금액
let fruitX = prompt('사과의 가격을 입력해주세요.','사과 가격');
let fruitY = prompt('배의 가격을 입력해주세요','배 가격');
fruitX = Number(fruitX);
fruitY = Number(fruitY);
let fruitTotal = fruitX + fruitY;
alert('사과의 가격은 '+ fruitX +'원이고, 배의 가격은 ' + fruitY + '원 입니다.\n총 지불금액은' + fruitTotal + '원 입니다.');
console.log(`${typeof(fruitX)}, ${typeof(fruitY)}`);
if(fruitTotal == cash ){
  alert('ƪ(`ε` ƪ) 좀 더 싸게는 안될까요?');
}else if ( cash >  fruitTotal ) {
  alert('ღ꒡ ᴈ꒡)♡⃛(꒡ε ꒡ღ 가격이 저렴하네요. 포장해주세요~٩( ᐛ )و');
}else if( cash <  fruitTotal ){
  alert('ヾ(｀⌒´メ)ノ″ 너무 비싸요. 에누리해주세요');
}else{
  alert('`◡`✿');
}
