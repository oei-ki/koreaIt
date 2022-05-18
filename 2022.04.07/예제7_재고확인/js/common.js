'use strict'

let inputText = prompt('재고검색','과일명')
let count = 0; //배열 처음부터 돌리기위해 0줌
let fruits = ['사과','배','수박','포도'];


function checkFunc() { //함수를 정의한다
  // 실행코드 작성 영역
  if(count < fruits.length){ //배열의 길이만큼 함수를 돌리게 만듬
    if( inputText == fruits[count]) {
      alert(`검색하신${inputText}은/는 재고가 있습니다.`)
      let checkBuy = confirm('구매하시겠습니까?');  // 구매 확인 취소 값주려고 변수명줌.
      if(checkBuy){
        alert('구매가 완료 되었습니다.')
      }else {
        alert('구매가 취소 되었습니다.')
      }
    }
      count++ // 입력한 값이 현 배열에 없어서 다음배열확인할 수 있게 +1 한거라서 입력한값과비교하는 if밖 배열비교if안에 위치함
      checkFunc(); //함수 내 함수를 호출(재귀함수)
  }
}
// 함수를 호출한다.
checkFunc();
