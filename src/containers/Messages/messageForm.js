import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addMessage, getMessages} from '../../store/actions';
import MessageListToday from '../../components/message/MessageListToday';
import SendMessageForm from './sendMessageForm';

import classes from './messageForm.module.css';

class MessageForm extends Component {

  componentDidMount() {
    this.props.dispatch(getMessages());
  }

  componentDidUpdate() {
    let messageList = document.getElementById("messageList");
    messageList.scrollTop = messageList.scrollHeight;
  }

  sendMessage = (text) => {
    // console.log(text);
    let timestamp = new Date();
    this.props.dispatch(addMessage({
        receiver:'%id_client%',
        message: text,
        senderid:'%id_sender%',
        sender_name: 'Вы',
        timestamp: timestamp.getTime(),
    }));
  }

  render() {
    let daysWithMessages = [];
    for (const key in this.props.messages) {
      daysWithMessages.push(<MessageListToday key={key} day={key} messages={this.props.messages[key]}/>);
    }
    let chatName = 'Имя чата';
    if (this.props.chatName) {
      chatName = this.props.chatName;
    }

    return (
      <div className={classes.messageForm}>
        <h2 className={classes.chatTitle}>{chatName}</h2> {/* Добавить отдельный компонент для отрисовки заголовка чата с именем контакта*/}
        <div className={classes.messageList} id='messageList'>
          {daysWithMessages}
        </div>
        <SendMessageForm sendMessage={this.sendMessage}/>
     </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
      token: store.auth.token,
      messages: store.messages.messages
  }
}

export default connect(mapStateToProps)(MessageForm);