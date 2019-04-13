// Student 라는 이름의 클래스를 생성하시오.

// 생성자를 추가하시오.: 속성을 초기화

// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오

// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오
      // -> 인스턴를 생성하는 방법은 new를 사용해서 생성하는 방법 밖에 없음.
// changeName이라는 이름의 메서드를 추가하시오.
// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
// 값이 바뀌었는지 출력해서 확인해보자

// 생성자의 역할은 무엇인가?
// 생성자에 사용된 this는 무엇을 가르키는가?

class Student {
  /* class는 바로 호출이 안되고, 무조건 new로 호출해야함
      * 붕어빵을 만드는 틀 : class
      * 객체에 올라가는 클래스 : new
  */

  constructor(name){ // 클래스가 가지고 있는 변수들을 초기화하기 위해 필요. - 초기화가 목적.
    this.name = name; // new로 해서 생성되면 자기자신을 가리키는 this.
  }

  /*
  changeName: function(userName) {
    this.name = userName;
  }// 메소드 데피니션!, OOP처럼!!
  */
  changeName(userName) {
    this.name = userName;
  }
}

const user1 = new Student("Jane"); // 생성자 호출
console.log(user1);
user1.changeName("Tom");
console.log(user1);



// 시간에 따라 변경하게 될 수도 있는 값들은 state로 관리 - 리액트의 핵심 중 하나.
// setState에 state를 수정하면 metge 된다.
// 비동기로 처리.


// 오버로딩이 아니라 오버라이딩하게 된다.
// 펑션 컴포넌트는 스테이트를 사용할 수 없기때문에
// 클래스 컴포넌트로 바꿔야지 스테이트를 사용할 수 있다.