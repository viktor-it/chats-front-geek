import React from 'react';

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
        className="send-message-form">
        <input
          onChange={this.handleChange}  //отслеживание ввода сообщения
          value={this.state.message}
          placeholder="Введите сообщение"
          type="text" />
        <button type='submit' className='btn btn-primary'>Отправить</button>
      </form>
    )
  }
}