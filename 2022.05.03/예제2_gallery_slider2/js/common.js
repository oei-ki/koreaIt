$(function(){
  $('#navi a').click(function(){
    let imgSrc = $(this).attr("href");
    // let checkAni = $("#main img:last").is(":animated"); /*:animated 속성이 되는지 확인*/
      $("#main img:last").animate({opacity: 0},{
        duration: 400,
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
  const marginNumber = 600;
  const  pwElem = $("#navi .page-wrap");
  const  pageLeng = $("#navi .page-wrap .page").length; //page 개수로 범위 지정
  $(pwElem).width(marginNumber*pageLeng); // .page의 legth 값을 가져와서 .page-wrap 초기 너비 값을 설정
  console.log();
  function pagingBtnFunc(el){
    el.click(function(){
      console.log(pageLeng);
      marginLeftNum = parseInt(pwElem.css("margin-left"));
      let isAni = pwElem.is(":animated");
      if(!isAni){ /*빨리 누르면 true가 뜨고 작동을 멈추게 함*/  /*부정어 표기 !isAni 와 같음*/
        if( $(el).hasClass("next") && marginLeftNum > -(marginNumber*(pageLeng-1)) ){
          pwElem.animate({marginLeft: (marginLeftNum) - marginNumber},"fast");
        }else if($(el).hasClass("prev") && marginLeftNum < 0 ){
          pwElem.animate({marginLeft: (marginLeftNum) + marginNumber},"fast");
        }else if( marginLeftNum == -(marginNumber*(pageLeng-1)) || marginLeftNum == 0){
          alert("더 이상 이미지가 없습니다.")
        };
      }else {

      };
    });
  };

  $(".btn").each(function(){  //each는 배열의 형태로 next,prev 두가자 버튼을 만듬. each를 사용안할시 prev만 보임
    pagingBtnFunc($(this));
  });

  // pagingBtnFunc($("img .prev"))    if( $(el).hasClass("next") 문 없이 함수 호출시
  // pagingBtnFunc($("img .next"))

  });
