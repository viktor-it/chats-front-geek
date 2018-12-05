import React from 'react';

import MessageList from './messageList';
import SendMessageForm from './sendMessageForm';

import classes from './messageForm.module.css';

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
  state = {
       messages: messages
  }

  sendMessage = (text) => {
    // console.log(text);
    this.setState({
      messages:[
          ...this.state.messages,{
          user: 'Вы',
          text
      }]
    });

  }

  render() {
  	// console.log(this.state.messages);
    // console.log(this.sendMessage);
    return (
      <div className={classes.messageForm}>
        <h2 className={classes.chatTitle}>Имя чата</h2> {/* Добавить отдельный компонент для отрисовки заголовка чата с именем контакта*/}
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
     </div>
    )
  }
}