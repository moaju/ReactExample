// const players = [
//   {name: 'LDK', score: 50, id: 1},
//   {name: 'HONG', score: 60, id: 2},
//   {name: 'KIM', score: 70, id: 3},
//   {name: 'PARK', score: 80, id: 4}
// ]; // 여기서 Angular와 Vue에 다른점! 여기서 Angular와 Vue는 자체 for가 있음. ng-for, v-for 는

// Function Component를 만들때 첫글자는 대문자로 만든다.
const Header = (props) => {
  // props : Read Only기에 바꾸면 X, 읽기만 해야한다.

  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  ); // return이 하나여서 줄일 수 있었던 것.
}
const Player = (props) => (
  <div className="player">
    <span className="player-name">
      {/*props.removePlayer에 id를 넘겨주는 함수 선언문*/}
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
    </span>
    <span className="player-name">
      {props.name}
    </span>
    <Counter />
    {/*score={props.score}*/}
  </div>
);

/* const Conster = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> - </button>
  </div>
);
    * 바로 하단에 있는 것과 차이점은
    * 상속과 Render 들어간것이 차이

    // Overloading이 아니라 Overriding하게 된다.
    // Function Component는 State를 사용할 수 없기때문에
    // Class Component로 바꿔야지 State를 사용할 수 있다.

    // 시간에 따라 변경되기 때문에 props로 관리 X -> state로 관리 및 다른 컴포넌트와 공유.
    // 부모에 state를 두고 공유, 이것을 Application Component라고 함.
    // props를 parameter로 받아들임. 리턴하는 단순한 컴포넌트로 static한 컴포넌트로 받아들임.
*/

class Counter extends React.Component {
  /* // superclass invocation 안되면 에러!
  * 부모가 가지고 있는 생성자도 호출해야함!
  * */
  /*
    state = {
      score: 0
    }
  * constructor 안에 쓰나 이렇게 쓰나 동일.. 뒤늦게 추가됨.
  */
  constructor(){
    super();
    this.state = {
      score: 0
    }
    // this.incrementScore = this.incrementScore.bind(this); 방법 1
  }

  // incrementScore(){
  //   console.log('increment: ', this);
  // } // 렉시컬 딧스 : 렉시컬(글자 그대로), 에로우 펑션안에 있는 딧스는 자기자신 딧스
  incrementScore = () => {
    console.log('increment', this);
    // this.state.score += 1; <- 이렇게 하면 UI가 렌더링이 안됨.
    // 1) setState()로 값을 변경해야만 UI 렌더링이 일어난다.(JS객체가 변경되면서 UI에 값이 변경됨.)
       // this.setState({score: this.state.scope + 1}); - 동기식처리 방식
    // 2) merge 된다 => 변경한 state만 기본값에 오버라이딩 된다.
    // 3) setState는 비동기로 일어난다.
        // this.setState(prevState => {
        //   return {score: prevState.score + 1}
        // }); // 여기서는 한줄일 때 줄일 수 없음, 함수를 나타내는 중괄호인지, JSON을 나타내는 중괄호인지 모름.
        // 이때 (괄호)를 하면 됨.
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  // decrementScore = () => {
  //   this.setState(prevState => ({score: prevState.score - 1}))
  // }
  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/* onClick={함수선언문} , 함수를 호출(괄호)하면 안됨
          * 클래스라는 부모로부터 독립하게 되어 부모를 찾을 수 없어서 Undifined가 나온.
          * 이것을 해결하기 위해 나온것이 bind 문법
          * 현재에 this 저장.?
        */}
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    )
  }
} // 추상화 : 공통화했다. 브라우저마자 동일하게 사용될수있도록 랬다.

// 프레시스 : ()                     NEXT, Angular자체, search 문제를!! 관리자페이지는 괜춘..
/*
const App = (props) => (
  <div className="scoreboard">*/
    //{/* title: 'My Scoreboard, totalPlayers: 11 */}
    /*<Header title="My Scoreboard" totalPlayers={11} />*/

    // {/*<Players name="LDK" score={50} />*/}
    // {/*<Players name="HONG" score={60} />*/}
    // {/*<Players name="KIM" score={70} />*/}
    // {/*<Players name="PARK" score={80} />*/}
  //   {
  //     props.initialPlayers.map(player => <Players name={player.name} score={player.score} key={player.id} /> )
  //   }
  // </div>
//); // 대문자가 들어오면 JSX라고 들어온거를 인지하지만, 소문자가 들어오면 html 태그가 들어왔다고 인지

class App extends React.Component {
  state = {
    players: [
    {name: 'LDK', id: 1},
    {name: 'HONG', id: 2},
    {name: 'KIM', id: 3},
    {name: 'PARK', id: 4}
  ]}

  handleRemovePlayer = () => { // 필터, 참인것들(프레디케이트, 조건에 만족하는것만!)만 모와서 새로운 객체!!, 새로운 배열로 리턴
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    })); // short hand property, players: players 같으면 players 하나만!
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />
        {
          this.state.players.map(player => <Player name={player.name}
                                                                 removePlayer={this.handleRemovePlayer}
                                                                 id={player.id}
                                                                 key={player.id} /> )
        }
        {/*props.initialPlayers.map(player => <Players name={player.name} key={player.id} /> )*/}
        {/*score={player.score}*/}
        {/*//state로 관리하기 때문에 모든 score 삭제*/}
      </div>
    );
  }
}


// <Header />는 new(생성자 호출)가 아니라 그냥 호출.
ReactDOM.render(<App />, document.getElementById('root'));
// initialPlayers={players}
/* 삭제 로직 Todolist
*  1) App 에서 삭제 함수를 생성
*  2) props로 삭제 함수를 전달
*  3) 삭제 클릭시 해당 props 호출
* */



// 인덱스가 안 맞을때 : Ctrl + Alt + l
// JSX : 컴포넌트 기반!, 컴포넌트 끼리 엮이면 트리형식

/* OOP 원칙 - 확장성, 재사용성, 유지보수
* 컴포넌트(클래스) 설계 원칙 5개 - SOLID 원칙
    * 하나의 컴포넌트는 하나의 책임을 가져라. - 잘개 잘라서 하나의 일만 줘라
*
* 패키지 설계원칙
    *
*
* 이 후로 디자인패턴, GoF 학습
* */

/*
* OOP에서 제일 쓰지 말아야할것
    * 상속, dependencies 때문에!!
    * Composition 기법으로 사용하는 것을 권장 - 리액트에서 보면 포함! 이런식으로 다른곳에 영향을 주지 않음,
        * 고급으로 가면 갈 수록 왠만하면 영향을 주는것을 배제한다.
    *
    *
* */

/* Map과 ForEach 차이
* MAP
    * 새로운 배열이 리턴 / creates a new arrat / 중요! : 새로운 것이 리턴
    * 메모리 주소가 바껴야지 바깥쪽에서 봤을때 바꼇다고 인지! - 특히 React
    * 그래서 안에있는 것만 바뀌면 인지를 못함!! - 특히 React
        * ex) 기존 바구니만 바뀌는것이 아니라 새로운 바구니에 값을 변경해서 그 리턴!

    *
* ForEach
    * Map과는 다르게 Return 되는것이 없음.
    * 그래서 값만 바뀜.
* */

/*
* Lifting Up : 위를 바꿀려면
* Read Only : 위에서 아래로 흐름, 읽기만 해야지 바꾸면 안된다.
* state : 시간에 따라 바뀌게 하는것
*
* */



