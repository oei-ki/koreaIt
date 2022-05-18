$(function(){
  //.attr()은 요소(element)의 속성(attribute)의 값을 가져오거나 속성을 추가합니다.
  //script 영역 attr() 사용 예
  //#wrap-id class attribute 가지고온다.
  /*get attribute*/
  // let attrNum = document.querySelector("#wrap-id").getAttribute('class');
  // console.log(attrNum);
  // //jquery 구현
  // let num = $("#wrap-id").attr("class");
  // console.log(`get class attribute: ${num}`);
  // // .wrqp-inner 클래스로 선택하여 id 값을 가져오시오.
  // num = $(".wrap-inner").attr("id");
  // console.log(`get class attribute: ${num}`);

//set attribute
//javascript 구현
// document.querySelector(".items").setAttribute("title","this is items");
//jquery 구현
console.log(".items");
$(".items").attr("title","this is items");
// $("input").attr("checked",false); // input checked 해제
// $("input").attr("checked",true) // input checked
console.log($("input").attr("checked"));

//add class
// javascript
// document.body.style.background = 'skyblue';
// document.body.classList.add("bg-red");
$("body").addClass("bg-red");
 $("body").addClass("bg-blue");
 $("body").addClass("bg-yellow");
 $("body").addClass("bg-black");





});
