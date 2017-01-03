import React, { Component } from 'react';
import Message from './Message';


class Messages extends Component {

  render() {
    const messages = this.props.messages.map((msg, i) => <Message key={i} message={msg.text} username={msg.username} isMyMessage={msg.isMyMessage} />);
    return (
      <section className="messages" id="chatlogs">
        <ul className="messages__list">
          {messages}
        </ul>
      </section>

    );
  }

}


export default Messages;
