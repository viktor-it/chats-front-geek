import React, { Component } from 'react';

class RegForm extends Component {
    constructor(props){
        super(props)
        this.state = {              // Здесь хранится актуальное состояние формы регистрации
            name:"",
            email:"",
            password:"",
            passwordCheck:"",
            checkbox:false,
            emailValid:false
        }

        this.handleSubmit = (e) => {
            e.preventDefault()
            if(this.state.emailValid === false){
                alert("Указан неверный email")
            }
            if(this.state.checkbox === false){
                alert("Для регистрации необходимо дать согласие на обработку персональных данных")
            }
            if(this.state.password !== this.state.passwordCheck){
                alert("Пароль не совпадает с подтверждением пароля")
            }
            if(this.state.checkbox && this.state.emailValid && (this.state.password === this.state.passwordCheck)){
                alert('Форма отправлена')    // Здесь будет происходить POST запрос к API
            }
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
            if(e.target.name === "email"){
                if(e.target.value.match(/[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
                    this.emailCheck(true)
                }else{
                    this.emailCheck(false)
                }
            }
        }

        this.emailCheck = (bool) => {
            this.setState({
                emailValid:bool
            })
        }

        this.handleCheckbox = (e) => {
            this.setState({
                checkbox: !this.state.checkbox
            })
        }
    }
    render() {
        console.log(this.state)
        return (
          <div>
            <form>
                <input type ="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Ваш никнейм"
                />
                <br/>
                <input type ="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="E-mail"
                />
                <br/>
                <input type ="text"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="Пароль"
                />
                <br/>
                <input type ="text"
                name="passwordCheck"
                onChange={this.handleChange}
                value={this.state.passwordCheck}
                placeholder="Подтверждение пароля"
                />
                <br/>
                <input type="checkbox" onChange={this.handleCheckbox}/>
                <p>Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.<br/>
                    <a href="#">Узнать больше</a>
                </p>
                <br/>
                <input type="submit" onClick={this.handleSubmit}/>
                <br/>
                <button>Отмена</button>
            </form>
          </div>
        );
    }
}

export default RegForm;
