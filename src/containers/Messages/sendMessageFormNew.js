import React from 'react';
import classes from './sendMessage.module.css';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import autosize from "autosize";

export default class SendMessage extends React.Component {
  state = {
    message: '',
    showEmojis: false
  }
  handleChange = (e) => {  //обновление состояния после ввода сообщения
    this.setState({
      message: e.target.value
    })
  }

  handleSubmitNew = (e) => {
    e.preventDefault();
    if (this.state.message) {
      this.props.sendMessage(this.state.message);  //метод отправки сообщения (в messageForm)
      this.setState({
        message: ''
      });
    }
  }

  handleSubmit = (e) => {
    //e.preventDefault();
    //e.stopPropagation();
    if (this.state.message) {
      this.props.sendMessage(this.state.message);  //метод отправки сообщения (в messageForm)
      this.setState({
        message: ''
      });
    }
  }
  showEmojis = (e) => {
    this.setState({
      showEmojis: true
    }, () => document.addEventListener('click', this.closeMenu))
  }
  closeMenu = (e) => {
    //console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState({
        showEmojis: false
      }, () => document.removeEventListener('click', this.closeMenu))
    }
  }
  addEmoji = (e) => {
    //console.log(e.unified)
    if (e.unified.length <= 5){
      let emojiPic = String.fromCodePoint(`0x${e.unified}`);
      this.setState({
        message: this.state.message + " " + emojiPic
      });
    }else {
      let sym = e.unified.split('-');
      let codesArray = [];
      sym.forEach(el => codesArray.push('0x' + el));
      let emojiPic = String.fromCodePoint(...codesArray);
      this.setState({
        message: this.state.message + " " + emojiPic
      });
    }
  }


keydown = (event) => {
  if(event.key === 'Enter' && event.shiftKey){
    event.stopPropagation();
    
  }else if(event.keyCode === 13){
    this.handleSubmit();
    event.preventDefault();
  }
}

componentDidMount() {
  this.textarea.focus();
  autosize(this.textarea);
}

  render() {
    return (
      <div className={classes.Main}>
        <button type='submit' className={classes.clip}><i className="fa fa-paperclip fa-2x"></i></button>
        
        <form
          onSubmit={this.handleSubmitNew}
          className={classes.Form}>
          {/* <input type='file' className={classes.clip}></input> */}
{/*          <input
          className={classes.input}
            onChange={this.handleChange}  
            value={this.state.message}
            placeholder="Введите сообщение"
            type="text" />*/}
          <textarea
            onKeyDown={this.keydown}
            ref={c => (this.textarea = c)}
            // klavaup={this.keyup}
            id = "textarea" 
            className={classes.input}
            onChange={this.handleChange}  //отслеживание ввода сообщения
            placeholder="Введите сообщение"
            value={this.state.message}
            rows={1}
            defaultValue="">
          </textarea>
          <button type='submit' className={classes.btn}><i className="fas fa-paper-plane"></i></button>
          <div>
            <button type='button' className={classes.smile} onClick={this.showEmojis}><i className="far fa-smile fa-2x"></i></button>
            {
            this.state.showEmojis ?
              <div className={classes.EmojisForm} ref={el => (this.emojiPicker = el)}>
                <Picker onSelect={this.addEmoji} />
              </div>
            :
              <p onClick={this.showEmojis}></p>  
            }
          </div>
        </form>
      </div>
    )
  }
}