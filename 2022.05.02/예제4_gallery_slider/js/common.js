$(function(){
  $('#navi a').click(function(){
    let imgSrc = $(this).attr("href");
    let checkAni = $("#main img:last").is(":animated"); /*:animated 속성이 되는지 확인*/
    // console.log(checkAni);

    // if(checkAni){ //중간에 누를때
    //   $("#main img:last").stop().css("opcity",0);
    //   $("main img:last").remove();
    //   $("#main img").attr("src",imgSrc)  //애니메이션 끝나기 전에 누르면 효과없이 바로 사진가져옴
    // }else{ //1초씩 애니메니션이 끝나고 누를
    //   $("#main img").before(`<img src="${imgSrc}">`);
    //   $("#main img:last").animate({opacity: 0},{
    //     duration: 1000,
    //     easing: "swing",
    //     complete/*끝나는즉시?*/: function(){
    //       $(this).remove()
    //     }
    //   });
    // }


    // if(checkAni == false){
    //   $("#main img:last").animate({opacity: 0},{
    //     duration: 1000,
    //     easing: "swing",
    //     start: function(){
    //       $("#main img").before(`<img src="${imgSrc}">`);
    //     },
    //     complete/*끝나는즉시?*/: function(){
    //       $(this).remove()
    //     }
    //   });
    // }


      $("#main img:last").animate({opacity: 0},{
        duration: 1000,
        easing: "swing",
        start: function(){
          $("#main img").before(`<img src="${imgSrc}">`);
        },
        complete/*끝나는즉시?*/: function(){
          $(this).remove()
        }
      });
    return false;
  });

  //prev.next 버튼으로 작동하는 스크립트
  let marginLeftNum = $("#navi .page-wrap").css("margin-left")
  console.log(parseInt(marginLeftNum));
  const marginNumber = 300;
  $("img.next").click(function(){
    marginLeftNum = $("#navi .page-wrap").css("margin-left");
    $("#navi .page-wrap").animate({
      marginLeft: parseInt(marginLeftNum) - marginNumber //지금은 0이지만 값에 마진이 있을경우 적용되어 값이 구해짐
    }, /* parseInt 숫자를 찾아서 number값으로 변환*/
    "fast", /*animate효과에 속도준거임*/
    function(){ /*log 보려고 넣음*/
      console.log($("#navi .page-wrap").css("margin-left"));
    }
  );

  $("img.prev").click(function(){
    marginLeftNum = $("#navi .page-wrap").css("margin-left");
    $("#navi .page-wrap").animate({
      marginLeft: parseInt(marginLeftNum) + marginNumber /*애니메이션에선 marginLeft로 사용*/
    },"fast");
  });
  });
});
