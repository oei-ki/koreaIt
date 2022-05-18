'use strict'
// split 사용
// let num = '1,2,3,4,5'
// let array = num.split(',');
// console.log(array[1]); nmm

let chatText_1 = "How are you doing today?";
let chatText_2 = "let's go lunch";
let chatText_3 = "i am a boy";
let chatText_4 = "good luck man!!";

let str = chatText_1.split('a'); // 'a'로 문자열을 잘라서 배열로 반환한다.
let str = chatText_1.split('a',2);  // 두번째 매개변수는 반환하는 배열의 수
//split('a',배열의 길이)  0: "How"  1: "re you doing tod"
console.log(str)

let ctstr = [];
ctstr.push(chatText_1.split(' '));
ctstr.push(chatText_2.split(' '));
ctstr.push(chatText_3.split(' '));
ctstr.push(chatText_4.split(' '));


console.log(ctstr)
console.log(`${ctstr[0][2]} ${ctstr[0][1]} ${ctstr[2][2]} ${ctstr[3][0]} ${ctstr[3][2]}`)


// let ctstr_1 = chatText_1.split(' ');
// let ctstr_2 = chatText_2.split(' ');
// let ctstr_3 = chatText_3.split(' ');
// let ctstr_4 = chatText_3.split(' ');
// console.log(ctstr_1,ctstr_2,ctstr_3)
