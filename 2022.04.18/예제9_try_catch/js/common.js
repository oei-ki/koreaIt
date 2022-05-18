'use strict'
class User{
  constructor(name,age,local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce(){
    try{
      alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다. ${this.idNumber}`)
      throw new Error('헉!! 이런 오류!!') // 예외처리 : 강제 에러 발생
      boxCheck();  //존재하지 않는 함수를 임의로 추가하여 오류를 발생시킴
    }
    catch(error){
      console.error(`${error.name}:::::::${error.message}`);
    }
  finally {
    //console.log("진행");
    console.log('프로그램을 종료합니다.');
    }
  }
}
let user1 = new User('jane', '39', 'LS')
user1.introduce();



//try {  /*정상 코드라면 아무런 문제 없이 블록의 시작부터 끝까지 실행된다.*/
      /*하지만 경우에 따라 예외가 밸생할 수 있다.*/
      /*예외는 throw 문에 의해 직접적으로 발생할 수도 있고, 또는 예외를 발생시키는
      메서드의 호출에 의해 발생할 수도 있따.*/
//}
// catch(e){
//       //이 블록 내부의 문장들은 오직  try블록에서 예외가 발생할 경우에만 실행된다.
        //이 문장들에서는 지역 변수 e를 사용하여 error 객체 또는 앞에서 던진 다른값을 참조할수 있다.
        //이 블록에서는 어떻게든 그 예외를 처리할 수도 있고, 그냥 아무것도 하지 않고 예외를 무시할
        //수도 있다, 아니면 throw를 사용해서 예외를 다시 발생시킬 수도 있다
// }

//finally{
  /*이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
    이 코드는 try 블록이 어떻게든 종료되면 실행된다.
    try 블록이 종료되는 상황은 다음과 같다.
    1) 정상적으로 블록의 끝에 도달했을 때
    2) break, continue 또는 return 문에 의해서
    3) 예외가 발생했지만 catch 절에서 처리했을때
    4) 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈때
  */
//}
