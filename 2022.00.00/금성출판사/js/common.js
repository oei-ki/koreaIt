$(function(){
  $(window).scroll(function(){
    let winH = $(this).height();
    let scrH = $(this).scrollTop();
    // console.log(scrH);

    $(".content-wrap").each(function(){
      let thisOffset = $(this).offset();
      // console.log(thisOffset); //[0,1007,1934,2861,3788,4715,5642,6569]
      // console.log(thisOffset);
      if( 2861 <= scrH && scrH < 3788 ){
        $("#section2").addClass("on");
      }else if( 3788 <= scrH && scrH < 4715 ){
        $("#section2").removeClass("on");
        $(".books ul li").addClass("on");
      }else if( 800 <= scrH && scrH < 1934 ){
        $("#anibanner h3").removeClass("on");
      }

    });
  });






});

// $("#section2 ")
