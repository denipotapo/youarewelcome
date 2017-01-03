import React, { Component } from 'react';
import nanoajax from 'nanoajax';
import InputPanel from './InputPanel';
import Messages from './Messages';
import Header from './Header';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      messages: [{ username: '@Bender', text: `hello, ${this.props.username}! Ask me smth.`, isMyMessage: false }],
    };
  }
  msgToState = (msg, username) => {
    const isMyMessage = username !== 'Bender' ? true : false;
    const message = {
      username: `@${username}`,
      text: msg,
      isMyMessage,
    };
    const _messages = this.state.messages;
    _messages.push(message);
    this.setState({
      messages: _messages,
    });
  }
  sendMessage = (msg) => {
    this.msgToState(msg, this.props.username);
    nanoajax.ajax({
      url: '/api/get-answer',
      method: 'POST',
      body: `q=${msg}`,
    }, (code, responseText, request) => {
      const response = JSON.parse(responseText);
      const answer = response.a.trim();
      setTimeout(() => {
        this.msgToState(answer, 'Bender');
      }, 800);
    });
  }
  render() {
    return (
      <div className="chat">
        <Header showLoginForm={this.props.showLoginForm} />
        <Messages messages={this.state.messages} />
        <InputPanel onSend={this.sendMessage} />
      </div>
    );
  }

}


export default ChatApp;
