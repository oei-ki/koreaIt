$(function(){
// script 영역
  let thisIndex = 0
  // $("td").mouseover(function(){
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $("td:nth-child("+thisIndex+")").addClass("hover")
  // }).mouseout(function(){
  //   thisIndex = $(this).index() + 1;
  //   $("td:nth-child("+thisIndex+")").removeClass("hover")
  // })

  // $("td").mouseenter(function(){
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $("td:nth-child("+thisIndex+")").addClass("hover")
  // }).mouseleave(function(){
  //   thisIndex = $(this).index() + 1;
  //   $("td:nth-child("+thisIndex+")").removeClass("hover")
  // })

  // $("td").on({
  //   mouseenter: function(){
  //     thisIndex = $(this).index() + 1;
  //     $("td:nth-child("+thisIndex+")").addClass("hover")
  //   },
  //   mouseleave: function(){
  //     thisIndex = $(this).index() + 1;
  //     $("td:nth-child("+thisIndex+")").removeClass("hover")
  //   }
  // })

  $("td").on({ /*가로값을 구해낸거임*/
    mouseenter: function(){
      thisIndex = $(this).index();
      console.log(thisIndex);
      $("table tr").each(function(){
        $(this).find("td").eq(thisIndex).addClass("hover")
        });

    },
    mouseleave: function(){
      thisIndex = $(this).index();
      $("table tr").each(function(){
        $(this).find("td").eq(thisIndex).removeClass("hover")
      });
    }
  });
});
