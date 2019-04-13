// function Animal(type, legs) {
//   this.type = type;
//   this.legs = legs;
//   this.logInfo = function() {
//     console.log(this === myCat);
//     console.log('The ' + this.type + ' has ' + this.legs + ' legs');
//   }
// }
// var myCat = new Animal('Cat', 4);


// json 내에 쓰이는 this는 부모를 가르킨다.
var myCat = {
  type: 'Cat',
  legs: 4,
  logInfo: function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
} // 리터럴객체: 그냥 서술했다. 이렇게 되면 값을 동적으로 바꿀수 없기 떄문에 function

// 리터럴 객체로 Animal 객체를 적으시오.
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);
// 1초후에 function에서 독립을 해서 값들이 달라짐. - 1초후에 큐에 자기자신만 들어감! 부모는 들어가지 않음!