import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addMessage, getMessages} from '../../store/actions';
import MessageList from '../../components/message/Message';
import SendMessageForm from './sendMessageForm';

import classes from './messageForm.module.css';

class MessageForm extends Component {

  componentDidMount() {
    this.props.dispatch(getMessages());
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
        date: timestamp
    }));
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
    

    return (
      <div className={classes.messageForm}>
        <h2 className={classes.chatTitle}>Имя чата</h2> {/* Добавить отдельный компонент для отрисовки заголовка чата с именем контакта*/}
        <MessageList messages={this.sortMessages(this.props.messages)}/>
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