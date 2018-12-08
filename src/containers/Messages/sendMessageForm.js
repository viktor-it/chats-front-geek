import React from 'react';
import classes from './sendMessage.module.css';

export default class SendMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {  //обновление состояния после ввода сообщения
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)  //метод отправки сообщения (в messageForm)
    this.setState({
      message: ''
    })
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={classes.Form}>
        <button type='submit' className={classes.clip}><i class="fa fa-paperclip fa-2x"></i></button>
        <input
        className={classes.input}
          onChange={this.handleChange}  //отслеживание ввода сообщения
          value={this.state.message}
          placeholder="Введите сообщение"
          type="text" />
        <button type='submit' className={classes.btn}><i class="fas fa-paper-plane"></i></button>
        <button type='submit' className={classes.smile}><i class="far fa-smile fa-2x"></i></button>
      </form>
    )
  }
}