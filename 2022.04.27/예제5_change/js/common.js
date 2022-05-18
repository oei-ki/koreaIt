$(function(){
  // script 영역 change
// prev(),next() method를 활용하여 변경된 select 값을 해당 input값에 입력하시오 ex)elem.find('a')



//Atype
    // $('select').change(function(){
    //   let thisVal = $(this).val();
    //   // console.log(thisVal);
    //   console.log($(this).next());
    //   $(this).next().find('input').val(thisVal);
    // });
    // $('input.inputtest').change(function(){
    //   alert(`input text가 ${$(this).val()}로 변경되었습니다.`)
    // });

//Btype
    // $('select').change(function(){
    //   let thisVal = $(this).val();
    //   // window.location.href = thisVal //스크립트
    //   $(location).attr('href',thisVal)
    //   console.log(thisVal);
    // });

    $('select').change(function(){
      let thisVal = $(this).val();
      if ( $(this).hasClass('family-site') ){
        $(location).attr('href',thisVal)
    }else{
        $(this).next().find('input').val(thisVal) /*next() : 선택한select의 다음 */
    }
  });
  // Atype 과 Btyped을 change method내부에서 if구문을 사용하여 구현하시오.


});
