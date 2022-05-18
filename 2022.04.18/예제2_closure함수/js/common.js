'use strict'
function outFunc(a) {
  let outerText = a;
  console.log(outerText);
  function innerFunc() {
    let innerText = 'inner-text';
    console.log(`${outerText}, ${innerText}`);
  }
  innerFunc();
}
outFunc('안녕하세요 저는 외부함수 입니다.')
// 안녕하세요 저는 외부함수 입니다.
// 안녕하세요 저는 외부함수 입니다., inner-text

function outFunc(a) {
  let outerText = 'outer-text';
  function innerFunc(num) {
    let innerText = num;
    console.log(`${outerText}, ${innerText}`);
  }
  innerFunc(a);
}
outFunc('안녕하세요 저는 내부함수 입니다.')

//outer-text, 안녕하세요 저는 내부함수 입니다.

function outFunc() {
  let outerText = 'outer-text';
  function innerFunc(a) {
    let innerText = 'inner-text';
    console.log(`${outerText},${a}`);
  }
  return innerFunc; //내부함수를 return을 통하여 외부로 노출 closure: 이 경우 외부에서 매개변수를 받을 수 있다.//실행이 아니라 던진다?
}

let closureFunc = new outFunc();
closureFunc('안녕하세요 전 크로저에요!!!'); //return으로 받은 내부함수
console.log(typeof(closureFunc))

// 중첩함수
/*
변수선언이름과 동일한 함수명을 사용할 수 없다. 변수로 사용된다.
중첩함수는 외부에서 내부함수를  호출할 수 없다. 내부에서만 호출이 가능하다.
*/

//클로저(폐쇄)
/*
1. 함수를 중첩으로 사용하여 외부와 단절시킴.
2. return을 사용하여 외부에 함수를 노출시키고 외부에서 매개변수 등을 통하여 내부함수에 접근 할 수 있다.
*/
