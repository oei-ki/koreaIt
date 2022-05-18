$(function(){
  // script 영역 event 사용 예
  // button으로 event 실행
  // document.querySelector('button').addEventListner('click',function(){});
  // document.querySelector('button').onclick = function(){};
  // let num = 0;
  // console.log($("img").attr("title"));

/*
아래 코드를 사용하여
이미지를 toggle 형태로 구현하고
첫번째 이미지에 alt 값 : 산이미지1
두번째 이미지에 alt 값 : 산이미지2
*/

  $("button").click(function(){
    if($("img").attr("title") == "mountain01"){
      //방법1
      // $("img").attr("src","./img/mountain_01.png")
      // $("img").attr("title","mountain02")
      // $("img").attr("alt","산이미지2")
      //방법2  //메서드체인
      // $("img").attr("src","./img/mountain_02.png").attr("title","mountain02").attr("alt","산이미지2")
      //방법3  // 객체
      $("img").attr({"src":"./img/mountain_02.png","title":"mountain02","alt":"산이미지2"})
    }else{
      $("img").attr("src","./img/mountain_01.png").attr("title","mountain01").attr("alt","산이미지1")
      // $("img").attr({"src":"./img/mountain_01.png","title":"mountain01","alt":"산이미지1"})
    }
  });

  /*
  a 태그 click event 사용 시 함수 내 return false 사용, 하위 브라우저 혹은 특정
  브라우저에서 a link 기본속성이 먼저 실행하여 event가 작동하지 않는 경우가 있다.
  */

    $("a").click(function(e){
      if($("img").attr("title") == "mountain01"){
        $("img").attr({"src":"./img/mountain_02.png","title":"mountain02","alt":"산이미지2"});
      }else{
        $("img").attr({"src":"./img/mountain_01.png","title":"mountain01","alt":"산이미지1"});
      }
      // e.preventDefault();
      // return false;  //네이버로 안가짐 왜??
    });


  //   console.log("click!!");
  //   console.log(num);
  //   num++;

});
