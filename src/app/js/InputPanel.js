import React, { Component } from 'react';
import attachIco from 'file!../../img/add.png';
import smileIco from 'file!../../img/smile.png';

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatInput: '',
    };
  }
  handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      if (!e.shiftKey) {
        this.submitHandler(e);
      }
    }
  }
  textChangeHandler = (e) => {
    this.setState({
      chatInput: e.target.value,
    });
  }
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.chatInput.length) {
      this.props.onSend(this.state.chatInput);
      this.setState({
        chatInput: '',
      });
    }
  }
  render() {
    return (
      <footer className="input-message">
        <form onSubmit={this.submitHandler}>
          <img className="input-message__ico--attachment" src={attachIco} width="30px" height="30px" alt="attach file" />
          <textarea
            onChange={this.textChangeHandler}
            onKeyDown={this.handleKeyPress}
            value={this.state.chatInput}
            placeholder="Enter for send. Shift+Enter for new line"
            onFocus={e => e.target.placeholder = ''}
            onBlur={e => e.target.placeholder = 'Enter for send. Shift+Enter for new line'}
            required
          />
          <img className="input-message__ico--smile" src={smileIco} height="15px" width="15px" alt="" />
          <a className="btn btn--sendMessage" onClick={this.submitHandler}>send</a>
        </form>
      </footer>

    );
  }
}

export default InputPanel;
