import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import {registerUser} from '../../store/actions';

import styles from './RegForm.module.css';

class RegForm extends Component {
    state = {              // Здесь хранится актуальное состояние формы регистрации
        name:"",
        email:"",
        password:"",
        passwordCheck:"",
        checkbox:false,
        emailValid:false,
        cancelButtonHovered: false,
        regButtonHovered: false
    }


    CancelButtonHover = () => {
        this.setState({
            cancelButtonHovered: !this.state.cancelButtonHovered
        });
    }
    RegButtonHover = () => {
        this.setState({
            regButtonHovered: !this.state.regButtonHovered
        });
    }

    handleSubmit = (e) => {
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
            this.props.dispatch(registerUser(this.state.name,this.state.password,this.state.email));
        }
    }

    handleChange = (e) => {
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

    emailCheck = (bool) => {
        this.setState({
            emailValid:bool
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    clickCancelHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/auth');
    }
    
    render() {
        // console.log(this.state);
        return (
            <div className={styles.Main}>
                <div className={styles.EllipseBig}>
                    <div className={styles.Title}>
                        Pocket Messenger
                    </div>
                    <div className={styles.Subtitle}>
                        For geeks by geeks
                    </div>
                    <div className={styles.EllipseSmall} />
                </div>

                <form className={styles.inputBox} action="true">
                    <div className={styles.formItems}>
                        <input type ="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                                placeholder="Ваш никнейм"
                                className={styles.Input + ' ' + styles.Name}
                    /></div>
                    <div className={styles.formItems}>
                        <input type ="text"
                               name="email"
                               onChange={this.handleChange}
                               value={this.state.email}
                               placeholder="E-mail"
                               className={styles.Input + ' ' + styles.Mail}
                        />
                    </div>
                    <div className={styles.formItems}>
                        <input type ="password"
                               name="password"
                               onChange={this.handleChange}
                               value={this.state.password}
                               placeholder="Пароль"
                               className={styles.Input + ' ' + styles.Pass}
                        />
                    </div>
                    <div className={styles.formItems}>
                        <input type ="password"
                               name="passwordCheck"
                               onChange={this.handleChange}
                               value={this.state.passwordCheck}
                               placeholder="Повторите пароль"
                               className={styles.Input + ' ' + styles.CheckPass}
                        />
                    </div>
                    <div className={styles.formItems}>
                        <input type="checkbox"
                               onChange={this.handleCheckbox}
                               className={styles.Checkbox}/>
                    </div>
                    <p className={styles.Text}>Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.<br/>
                        <a className={styles.KnowMore} href="#">Узнать больше</a>
                    </p>

                    <button
                        onClick={this.handleSubmit}
                        className={styles.Input + ' ' + styles.ButtonOk}>Регистрироваться
                    </button>

                    {/*<button onClick={this.clickCancelHandler}*/}
                            {/*className={styles.Input + ' ' + styles.Button + ' ' + styles.CancelButton}>*/}
                        {/*Отмена*/}
                    {/*</button>*/}
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(RegForm));
