'use strict'
window.onload = function(){
  init(); // window가 로드된 이후 초기화 코드
  // createInputFunc('male','checkbox',contain)  //contain변수임 그래서 스트링타입으로 안씀
  // genderText2('male','male','남성',contain)
  // createInputFunc('female','checkbox',contain)
  // genderText2('female','female','여성',contain)

}

function init(){
  let btn = document.createElement('div');  //결과 <div></div>
  btn.id = 'btn';    //id는 단일요소라 잡아줄 필요가 없나?
  btn.removeAttribute('id');  //id 삭제
  let text = document.createTextNode('test');
  btn.append(text);  //html요소에 결과 <div>text</div>
  let contain = document.createElement('div')  //결과 <div></div>
  // btn.classList = 'wrap'  //html요소에 결과 <div class="wrap"></div>
  contain.classList.add('wrap')
  contain.append(btn);
  // console.log(contain);
  let divBox = document.createElement('div'); //결과 <div></div>
  divBox.prepend(document.createTextNode('div-Box'));//html요소에 결과 <div>div-Box</div>
  document.body.append(contain)
  document.body.append(divBox)

  //createTextNode 텍스트입력
  //createElement html 요소를 만듬 ex).createElement( 'h1' ) => <h1></h1>
  //element node : Element = HTML의 Tag와 같다! 즉, 요소다 이 말이다.

  //append : 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입
  //prepend : 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입


//첫번째 인풋태그 추가
// let inputText = document.createElement('input');
// inputText.id = 'male';
// inputText.setAttribute( 'type', 'checkbox' )
// contain.prepend(inputText)
// contain.append(inputText);
createInputFunc('male','checkbox',contain)
//첫번째 라벨 태그 추가
// let inputLabel = document.createElement('label');
// inputLabel.id = 'gender'
// inputLabel.setAttribute('for','male')
// inputLabel.append(document.createTextNode('남성'));
// contain.prepend(inputLabel)
createLableFunc('gender','female','남성',contain)

//두번째 인풋 태그 추가
let inputText2 = document.createElement('input');
inputText2.id = 'female';
inputText2.setAttribute( 'type', 'checkbox' )
contain.prepend(inputText2)
createInputFunc('male','checkbox',contain)

// 두번쨰 라벨 태그추가
let inputLabel2 = document.createElement('label');
inputLabel2.id = 'gender'
inputLabel2.setAttribute('for','male')
inputLabel2.append(document.createTextNode('여성'));
contain.prepend(inputLabel2)
createLableFunc('gender','female','여성',contain)
}

//공통 코드 부분 함수로 만들기
let contain = document.createElement('div')
contain.classList.add('wrap')

function createInputFunc(id,type,ctn){
  let elem  = document.createElement('input');
  elem.id = id;
  elem.setAttribute( 'type', type )
  ctn.prepend(elem)
}
function createLableFunc(id,forVal,text,ctn){
  let elem = document.createElement('label');
    elem.id = id
    elem.setAttribute('for',forVal)
    elem.append(document.createTextNode(text));
    return elem;
    document.body.prepend(containName)
}
