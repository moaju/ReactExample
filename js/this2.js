function Person() {
  this.arms = 2; // this = {arms: 2}
  this.legs = 2; // this = {arms: 2, legs: 2}
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person();
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
// console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?

/*
* 함수명의 앞부분을 대문자로 사용하겠다는 것.
   --> 생성자 객체로 사용하겠다는 무언의 약속
* 자바스크립트에서 객체를 생성하는 2가지 방법
   --> 1) 리터럴 객체, 2) 생성자

   * !!!! 생성자 함수로 사용될 때( new 키워드로 json 객체 생성 )
   * 1) 내부적으로 자기자신을 가츠키는 this가 생성되고,
         * this = {}
   * 2) json이 리턴되지 않으면 이 this가 리턴된다.
   * 3) 만약 return이 있더라도 json 형태가 아니면 this가 리턴된다.

* React에서도 사용되니 참조!!
   * 자기자신을 가리킴!
* */

/*
* function component가 메모리를 적게 차지함. <- 기능이 작기 때문에
* 재사용이 가능한 UI 모음
* function component : 함수 호출
* function component : 생성자 함수 호출(new를 사용한 것)
* */