import React from 'react';

// import MessageList from './messageList';
import MessageList from '../../components/message/Message';
import SendMessageForm from './sendMessageForm';

import classes from './messageForm.module.css';

const messages = [          //заменятся на полученное с сервера
  {
    date: 1543990506864,    
    senderId: "Дизайнер 1",
    text: "Мы в процессе его разработки"
  },   
  {
    date: 1543990756864,
    senderId: "Мария",
    text: "Отлично. Очень ждем!"
  },      
  {
    date: 1543990196864,
    senderId: "Мария",
    text: "Дорогие дизайнеры! Есть ли что-нибудь по десктопу клиенту? Хотелось бы взглянуть!"
  }
];

export default class MessageForm extends React.Component {
  state = {
       messages: messages
  }

  sendMessage = (text) => {
    // console.log(text);
    let timestamp = new Date();

    this.setState({
      messages:[
          ...this.state.messages,{
          date: timestamp.getTime(),
          senderId: 'Вы',
          text
      }]
    });

  }

  sortMessages = (messArray) => {   
    messArray.sort(function(a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA > dateB ? 1 : -1;
    });
    return messArray;
  }

  render() {
  	// console.log(this.state.messages);
    // console.log(this.sendMessage);
    return (
      <div className={classes.messageForm}>
        <h2 className={classes.chatTitle}>Имя чата</h2> {/* Добавить отдельный компонент для отрисовки заголовка чата с именем контакта*/}
        <MessageList messages={this.sortMessages(this.state.messages)}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
     </div>
    )
  }
}