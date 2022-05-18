 'use strict'

let x = prompt('숫자를 입력해주세요','숫자');
let y = prompt('숫자를 입력해주세요','숫자');
console.log(`x의 아스키코드 값은 ${x.charCodeAt(0)}, y의 아스키 코드 값은 ${y.charCodeAt(0)}`);
x = Number(x);
y = Number(y);
alert('입력값이 입력완료 되었습니다. x값은 '+ x +'이고, y값은 ' + y + '입니다.');
console.log(typeof(x)+','+ typeof(y));
//  == console.log(`${typeof(x)},${typeof(y)}`);
if(x==y){
  alert('x는 y와 같습니다.');
}else if (x>y) {
  alert('x는 y보다 큽니다.');
}else{
  alert('x는 y보다 작습니다.')
};
