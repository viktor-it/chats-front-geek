import React, { Component } from 'react';
import MessageListToday from './MessageListToday';

import classes from './Message.module.css';
const DUMMY_DATA = [
  {
    date: new Date(),
    senderId: "Мария",
    text: "Дорогие дизайнеры! Есть ли что-нибудь по десктопу клиенту? Хотелось бы взлянуть?"
  },
  {
    date: new Date(),
    senderId: "Дизайнер 1",
    text: "Мы в процессе его разработки"
  }
]
class Message extends Component {


  state = {
       messages: DUMMY_DATA
    }

  render() {
    
    return (
      <div className={classes.test}>
        <MessageListToday messages={[...this.props.messages]} />
      </div>
    );
  }
}

export default Message;
