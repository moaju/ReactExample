/*
* this : 자신, 부모, 글로벌
* closer, this, prototype chain
*
*
*
*
*
*
*
*
*
*
 */

// global this
function person() {
  this.arms = 2;
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person()); // 리턴문이 없어서 undifinde 찍힘
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
// - arms가 없는데 var로 따로 선언되지 않았기 때문에 global로 적용되서 찍힘
// - 글로벌 객체에 적용, person()로 호출해서 글로벌 객체에 넣어놓아서 호출이 된것. - 함수의 호출 전후가 다름.
console.log(arms);