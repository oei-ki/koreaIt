//평균구하기
var score_1, score_2, score_3, score_4, score_5, leng, total, avg;
score_1 = 85;
score_2 = 90;
score_3 = 95;
score_4 = 100;
score_5 = 75;
leng = 5;
total = score_1+ score_2+ score_3+ score_4+ score_5;
avg = total/leng;
// console.log(`교과목 평균 점수는 ${avg} 점 입니다.`);

//나이 키 평균 구하기
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;

//키 변수 선언
var height1, height2, height3, height4, height5, height6, height7, height8, height9, height10;
height1 = 175;
height2 = 180;
height3 = 182;
height4 = 190;
height5 = 185;
height6 = 179;
height7 = 182;
height8 = 183;
height9 = 191;
height10 = 187;
//나이 변수 선언
var age1, age2, age3, age4, age5, age6, age7, age8, age9, age10;
age1 = 32;
age2 = 44;
age3 = 21;
age4 = 18;
age5 = 52;
age6 = 22;
age7 = 45;
age8 = 25;
age9 = 38;
age10 = 28;
//키의 합산
heightTotal = height1+ height2+ height3+ height4+ height5+ height6+ height7+ height8+ height9+ height10;
//나이 합산
ageTotal = age1+ age2+ age3+ age4+ age5+ age6+ age7+ age8+ age9+ age10;
//키의 평균
heightAvg = heightTotal / countLeng;
// console.log(heightAvg);
//나이 평균
ageAvg = ageTotal / countLeng;
// console.log(ageAvg);
//alert 출력하기
// alert(`평균 키는 ${heightAvg}cm 입니다.`);
// alert(`평균 나이는 ${ageAvg}살 입니다.`);

// document에 text 출력
var list = '';

// 데이터 합지기
list += '<ul class="list">';  //list = list + '';
list += '<li>우리반 학생의 평균 나이는' + ageAvg + '살 입니다.</li>';
list +='<li>우리반 학생의 평균 키는' + heightAvg + 'cm 입니다.</li>';
list += '</ul>';
console.log(list);

document.body.innerHTML = list;
