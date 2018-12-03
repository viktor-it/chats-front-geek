import React from 'react';

import MessageList from './messageList';
import SendMessageForm from './sendMessageForm';

const messages = [          //заменятся на полученное с сервера
  {
    user: "user1",
    text: "Сообщение"
  },
  {
    user: "user1",
    text: "Еще одно сообщение"
  }
];

export default class MessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
       messages: messages
    }
  }

  sendMessage(text) {
    console.log(text);

  }

  render() {
  	console.log(this.state.messages);
    console.log(this.sendMessage);
    return (
      <div className="message-form">
        <h2><p className="title">Чат</p></h2> {/* Добавить отдельный компонент для отрисовки заголовка чата с именем контакта*/}
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
     </div>
    )
  }
}