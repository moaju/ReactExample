// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
// function myName(first, last) {
//   console.log(first + last);
// }

const myName = function(first, last){
  console.log(first + last);
}
/*
* 1. 변수 테이블 생성(호이스팅): 변수명, 함수 선언문
*     --> 값은 함수 테이블에 넣지 않음.
*
* 함수 표현식을 사용하는것을 권장함.
*  --> 잘못해서 제대로 값이 할당되지 않는것을 방지하기 위해!
*
*
* */
myName("Yan", "Fan");


/* 기명함수, 익명함수!
   함수에 이름이 있냐(기명함수) 없냐(익명함수)
*
*
* */