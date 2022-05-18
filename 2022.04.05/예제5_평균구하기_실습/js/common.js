window.onload = function(){ //head에서 실행하게 만드는?
  //실행문

var name_1, name_2, name_3, name_4, name_5;
name_1 = '홍길동';
name_2 = '박길동';
name_3 = '김길동';
name_4 = '이길동';
name_5 = '최길동';

var height_1, height_2, height_3, height_4, height_5;
height_1 = 175;
height_2 = 180;
height_3 = 190;
height_4 = 185;
height_5 = 178;

var age_1, age_2, age_3, age_4, age_5;
age_1 = 30;
age_2 = 18;
age_3 = 21;
age_4 = 35;
age_5 = 38;

var score_1, score_2, score_3, score_4, score_5;
score_1 = 85;
score_2 = 88;
score_3 = 90;
score_4 = 82;
score_5 = 95;

var heightTotal, heightavg, ageTotal, ageAvg, scoreTotal, scoreAvg;;
var count = 5;
heightTotal = height_1+ height_2+ height_3+ height_4+ height_5;
ageTotal = age_1+ age_2+ age_3+ age_4+ age_5;
scoreTotal = score_1+ score_2+ score_3+ score_4+ score_5;
heightavg = heightTotal/count;
ageAvg = ageTotal/count;
scoreAvg = scoreTotal/count;

var list='';
list += '<table>';
list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
list += '<tr><td>'+name_1+'</td><td>'+age_1+'</td><td>'+height_1+'</td><td>'+score_1+'</td></tr>';
list += '<tr><td>'+name_2+'</td><td>'+age_2+'</td><td>'+height_2+'</td><td>'+score_2+'</td></tr>';
list += '<tr><td>'+name_3+'</td><td>'+age_3+'</td><td>'+height_3+'</td><td>'+score_3+'</td></tr>';
list += '<tr><td>'+name_4+'</td><td>'+age_4+'</td><td>'+height_4+'</td><td>'+score_4+'</td></tr>';
list += '<tr><td>'+name_5+'</td><td>'+age_5+'</td><td>'+height_5+'</td><td>'+score_5+'</td></tr>';
list += '<tr><td>평균</td><td>'+ageAvg+'</td><td>'+heightavg+'</td><td>'+scoreAvg+'</td></tr></table>';

document.body.innerHTML = list;
}
