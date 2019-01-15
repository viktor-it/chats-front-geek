import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addMessage, getMessages} from '../../store/actions';
import MessageListToday from '../../components/message/MessageListToday';
import SendMessageForm from './sendMessageForm';

import classes from './messageForm.module.css';

class MessageForm extends Component {
    state = {
        id: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return {
                id: nextProps.id,
            }
        }
        //если состояние не изменилось
        return null;
    }

    componentDidUpdate(prevProps) {      
        if (prevProps.id !== this.props.id) {
            this.props.dispatch(getMessages(this.state.id));
        }

        let messageList = document.getElementById("messageList");
        messageList.scrollTop = messageList.scrollHeight;
    }

    sendMessage = (text) => {
      // console.log(text);
      let timestamp = new Date();
      this.props.dispatch(addMessage({
          receiver: 55,
          message: text,
          senderid:'%id_sender%',
          author: 'Вы',
          timestamp: timestamp.getTime(),
      }));
    }

    render() {
        //информация о чате в шапке поля сообщений
        let chatTitle = null;
        let chatImg = null;
            //ищем по id в списке чатов в сторе
            if(this.state.id !== undefined){
                let activeChat = this.props.contacts.find(x => x.id === this.state.id);             
                if (activeChat === undefined){
                    activeChat = this.props.chats.find(x => x.id === this.state.id);
                    chatTitle = activeChat.title;
                    chatImg = activeChat.img;
                }          
            }

        
        let daysWithMessages = [];
        for (const key in this.props.messages) {
          daysWithMessages.push(<MessageListToday key = {key} day = {key} messages = {this.props.messages[key]}/>);
        }

        return (
            <div className = {classes.messageForm}>
                <div className = {classes.Header}>
                  <div className = {classes.ChatInfo}>
                      <div className = {classes.ChatIcon}>
                          <img src = {chatImg} 
                              className = {(chatImg == null) ? 
                                          classes.ChatImgNone : 
                                          classes.ChatImg} 
                              alt = "group_icon"/>
                      </div>
                      <h2 className = {classes.ChatTitle}>{chatTitle}</h2>
                  </div>
                </div>
                <div className = {classes.messageList} id = 'messageList'>
                    {daysWithMessages}
                </div>
                <SendMessageForm sendMessage = {this.sendMessage}/>
            </div>
        )
    }
  }

const mapStateToProps = (store) => {
  return {
      token: store.auth.token,
      messages: store.messages.messages,
      id: store.messages.id,
      chats: store.chats.chats,
      contacts: store.contacts.contacts
  }
}

export default connect(mapStateToProps)(MessageForm);