import React, { Component } from 'react';
import benderAvatar from 'file!../../img/bender.png';
import santaAvatar from 'file!../../img/santa-claus.png';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  render() {
    const placement = this.props.isMyMessage ? 'right' : 'left';
    const avatar = this.props.isMyMessage ? santaAvatar : benderAvatar;

    return (
      <li className={`message ${placement}`} >
        <div className="message__container">
          <img className={`avatar ${placement}`} src={avatar} width="40px" height="40px" alt="" />
          <div className={`message__wrapper ${placement}`}>
            <div className="message__info">
              <h3 className="message__username">{this.props.username}</h3>
              <span className="message__date">Wensday 12:04 </span>
            </div>
            <p className="message__text">{this.props.message}</p>
          </div>
        </div>
      </li>
    );
  }
}
export default Message;
