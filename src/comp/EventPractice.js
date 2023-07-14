import React, { Component } from 'react';
import './EventPractice.css';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
    userid: '',
    passwd: '',
  };

  // 멤버 변수 선언
  // userid = null; // ref를 사용하여 callback function에서 값을 설정
  // username = null;
  // passwd = null;

  /*
  handlerChangeMessage = (e) => {
    console.log(e.target.value);
    this.setState({ message: e.target.value });
  };
  handlerChangeUsername = (e) => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };
   */

  // 여러 handler 합치기
  handlerChange = (e) => {
    console.log(e.target.name);
    // this.setState({ e.target.name: e.target.value}) >> 변수를 사용했는데 인식이 안됨.. 그래서 색인 배열을 사용해야 한다
    this.setState({ [e.target.name]: e.target.value });
  };

  // handlerKeyDown = (e) => {
  //   console.log(e);
  //   if (e.code === 'Enter') this.handlerInit(e);
  // };

  handlerInit = () => {
    this.setState({
      message: '',
      username: '',
      userid: '',
      passwd: '',
    });
  };

  handlerSubmit = (e) => {
    // let passwd = document.querySelector("input[name='passwd']");
    this.passwd.className = '';
    if (this.state.passwd === '0000') {
      this.passwd.className = 'success';
    } else {
      this.passwd.className = 'failure';
    }

    if (this.state.message === '') {
      // form 속성 action에 설정된 주소로 입력 값 전달을 취소한다
      alert('메시지 입력해줘~');
      e.preventDefault();
      // 원시적인 자바스크립트 코드
      // let message = document.querySelector("input[name='userid']");
      this.message.focus();
      return false;
    }

    if (this.state.username === '') {
      alert('이름 입력해줘~');
      e.preventDefault();
      // let username = document.querySelector("input[name='username']");
      this.username.focus(); // this.username => ref={(username) => (this.username = username)}
      return false;
    }

    if (this.state.userid === '') {
      alert('아이디 입력해줘~');
      e.preventDefault();
      // let userid = document.querySelector("input[name='userid']");
      this.userid.focus();
      return false;
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <form
          name="myForm"
          action="registerMember.do"
          method="get"
          onSubmit={this.handlerSubmit}
        >
          메시지 :{' '}
          <input
            type="text"
            name="message"
            placeholder="하고싶은 말을 입력해~"
            onChange={this.handlerChange}
            // onKeyDown={this.handlerKeyDown}
            value={this.state.message}
            ref={(message) => (this.message = message)}
          />
          <br />
          사용자명 :{' '}
          <input
            type="text"
            name="username"
            placeholder="사용자명을 입력해~"
            onChange={this.handlerChange}
            // onKeyDown={this.handlerKeyDown}
            value={this.state.username}
            // ref={(ref) => (this.username = ref)} // (ref)는 자기자신(input태그), input태그를 가지고 와서 username(멤버변수)에 집어넣는다
            ref={(username) => (this.username = username)} // let username = document.querySelector("input[name='username']"); 대체
          />
          <br />
          아이디 :{' '}
          <input
            type="text"
            name="userid"
            placeholder="아이디를 입력해~"
            onChange={this.handlerChange}
            // onKeyDown={this.handlerKeyDown}
            value={this.state.userid}
            ref={(userid) => (this.userid = userid)}
          />
          <br />
          비밀번호 :{' '}
          <input
            type="password"
            name="passwd"
            placeholder="비밀번호를 입력해~"
            onChange={this.handlerChange}
            // onKeyDown={this.handlerKeyDown}
            value={this.state.passwd}
            ref={(passwd) => (this.passwd = passwd)}
          />
          <h2>메시지 : {this.state.message}</h2>
          <h2>사용자 : {this.state.username}</h2>
          <h2>아이디 : {this.state.userid}</h2>
          <h2>비밀번호 : {this.state.passwd}</h2>
          <button type="submit">확인</button>
          <button onClick={this.handlerInit}>초기화</button>
        </form>
      </div>
    );
  }
}

export default EventPractice;
