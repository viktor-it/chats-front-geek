import React, { Component } from 'react';
import MessageListToday from './MessageListToday';


const d = new Date();
const DUMMY_DATA = [
  {
    date: Date(),
    senderId: "Мария",
    text: "Дорогие дизайнеры! Есть ли что-нибудь по десктопу клиенту? Хотелось бы взлянуть?"
  },
  {
    date: Date(),
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
      <div className="App">
        test
        <MessageListToday messages={this.state.messages} />
      </div>
    );
  }
}

export default Message;
