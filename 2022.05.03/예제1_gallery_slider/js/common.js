$(function(){
  $('#navi a').click(function(){
    let imgSrc = $(this).attr("href");
    let checkAni = $("#main img:last").is(":animated"); /*:animated 속성이 되는지 확인*/

      $("#main img:last").animate({opacity: 0},{
        duration: 1000,
        easing: "swing",
        start: function(){
          $("#main img").before(`<img src="${imgSrc}">`);
        },
        complete: function(){
          $(this).remove()
        }
      });
    return false;
  });

  //prev.next 버튼으로 작동하는 스크립트
  let marginLeftNum = $("#navi .page-wrap").css("margin-left")
  const marginNumber = 300;

  function pagingBtnFunc(el){
    el.click(function(){
      console.log($(el).attr("class")); /*  pagingBtnFunc($(".btn")); 함수 호출시 prev로만 뜸*/
      marginLeftNum = parseInt($("#navi .page-wrap").css("margin-left"));
      let isAni = $("#navi .page-wrap").is(":animated");
      // console.log(`애니메이션 진행 전 :${marginLeftNum}`);
      console.log(isAni);
      if(!isAni){ /*빨리 누르면 true가 뜨고 작동을 멈추게 함*/  /*부정어 표기 !isAni 와 같음*/
        if( $(el).hasClass("next") && marginLeftNum > -(marginNumber*2) ){
          // console.log(`애니메이션 진행 후 :${$("#navi .page-wrap").css("margin-left")}`);
          $("#navi .page-wrap").animate({marginLeft: (marginLeftNum) - marginNumber},"fast");
        }else if($(el).hasClass("prev") && marginLeftNum < 0 ){
          $("#navi .page-wrap").animate({marginLeft: (marginLeftNum) + marginNumber},"fast");
        }else if( marginLeftNum == -(marginNumber*2) || marginLeftNum == 0){
          alert("더 이상 이미지가 없습니다.")
        };
      }else {

      };
    });
  };

  $(".btn").each(function(){
    console.log($(this));
    pagingBtnFunc($(this));
  });
    // pagingBtnFunc($(".btn"));

  // $("img.next").click(function(){
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({
  //     marginLeft: parseInt(marginLeftNum) - marginNumber //지금은 0이지만 값에 마진이 있을경우 적용되어 값이 구해짐
  //   }, /* parseInt 숫자를 찾아서 number값으로 변환*/
  //   "fast");

  // $("img.prev").click(function(){
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({
  //     marginLeft: parseInt(marginLeftNum) + marginNumber /*애니메이션에선 marginLeft로 사용*/
  //   },"fast");

  });
