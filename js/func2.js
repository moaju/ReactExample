// let circleArea = function(pi, r) {
//   let area = pi * r * r;
//   return area;
// };

// 람다식
// let circleArea = (pi, r) => {
//   let area = pi * r * r; // 반지름 구하는 공식!
//   return area;
// }

// 바로 return 하게 됨.
let circleArea = (pi, r) => pi * r  * r;

/*
* 익명함수에 유래 람다식!!
* 입력과 출력!
* 왼쪽에는 입력 -> 오른쪽에는 출력

* 모든언어 전부 람다식! 공통적!
* JAVA는 => 대신 ->로 애로우 사용.
*
* */

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"