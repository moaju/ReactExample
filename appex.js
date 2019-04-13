// const titleId = 'main-title/';
// const title = 'This is a Title.';

// const title = <h1 id="main-title" title="This is a title">My String Element</h1>;

const title = React.createElement(
  'h1',
  {id: 'main-title', title: 'This is a title'},
  'My String Element'
);

// todolist
const strongTag = React.createElement(
  'strong',
  null,
  'a Description'
);

// const desc = <p>This is a Description</p>;
const desc = React.createElement(
  'p',
  null,
  'This is ', strongTag
);
console.log(title);
console.log(strongTag);
console.log(desc);

// const header = (<header>
//   <h1 id={titleId} title={title}>My String Element</h1>;
//   {/*이곳은 디스크립션입니다.*/};
//   <p className="main-desc">This is a Description</p>;
// </header>);
const header = React.createElement(
  'header',
  null,
  title, desc
);


console.log(title); // return 값 : 리액트 엘리먼트
ReactDOM.render(header, document.getElementById('root'));

// !! JSX 문법
/*
 * 작성 법
   <h1 id="main-title" title="This is a title">My String Element</h1>

 * babel
   * 만약 문법 작성시 에러뜨면 babel이 없어서 그런것!
   * babel이 React Element로 변경!


 * () <- 컬리스 브레이스 안에 작성!
 * React : 리액트는 실제 돔을 조작X, 자바스크립트를 핸들링.
           돔과 매밉이 되어있는 자바스크립트 객체!! 그래서 이 객체를 버튜얼 돔!!
            --> 자바스크립트 객체로 만듦!!

 * className로 사용되는 이유는 class라는 예약어가 있어서 Name이 붙음.
 * 파스칼 케이스
 *
 *
 */

// !! React 기본
// virture DOM 이라는 것, 지금 이거는 실무에서 사용 하지 않음.
/* 파라메터
 * 1. 태그, [ Option? ]
 * 2. 속성, [ Option? ]
 * 3. 자식노드(Chuld Run): 스트링 또는 리액트가 올 수 있음

 * JavaScript는 Overloading이 없기때문에 파라메터를 다 적어줘야함!
   안 적으면 에러!

 * React의 핵심 : Virtrue DOM
   --> 여기 app.js에 있는거는 virture DOM!! 엑!!
 */

// !! JavaScript
/*
 * 네임스페이스! 변수가 겹치지 않게! 전역변수 충돌 문제 보완
 * - 보안으로 생긴것
 * let, const : 둘다 스코프가 있음. 지역변수
 * 두개의 차이는 한번 더 사용 가능하냐, 못 사용하느냐 차이!!

 * jQuery : jQuery 돔을 찾고 프리펜드나 어펜드해서 조작함. 직접 UI 핸들링.
 * React : 리액트는 실제 돔을 조작X, 자바스크립트를 핸들링.
           돔과 매밉이 되어있는 자바스크립트 객체!! 그래서 이 객체를 버튜얼 돔!!
            --> 자바스크립트 객체로 만듦!!

 * 자바스크립트에서는 ...에 의미: 스프라이트 연산자 or 나머지 연산자로 쓰임
 *
 * 재사용할 수 있다. 컴포넌트 개발 방식
 *
 */

// 코드 시스턴스 기능 지원 : 자동완성.