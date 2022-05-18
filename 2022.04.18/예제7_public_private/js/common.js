'use strict'

class User {
  #idNumber = '1234';  // private field #붙여야하며 constructor바깥 상위영역에 사용
  constructor(name,age,local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  //소개
  introduce(){
    alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다. ${this.#idNumber}`)
  }
}

let user1 = new User('Tom','39','LA');
console.log(user1.name);
// user1.introduce();
// console.log(user1.idNumber); // private field 외부접근 실행 : error, class 영역에서 정의
