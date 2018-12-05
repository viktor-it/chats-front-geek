import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import classes from './Form.module.css';

class Form extends Component {
    state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' введён некоректно. Проверьте ещё раз!';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' слишком короткий';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    clickLogin() {
        localStorage.setItem("token","тест");
    }

    render () {
        return (
            <div className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.restangle_2_1}></div>
                    <div className={classes.restangle_2_2}></div>
                    <div className={classes.restangle_2_3}>
                        <form action="">
                            <input className={classes.mail} type="email" required name="email"
                                       placeholder="Логин"
                                       value={this.state.email}
                                       onChange={this.handleUserInput} />
                            <input className={classes.pass} type="password" name="password"
                                       placeholder="Пароль"
                                       value={this.state.password}
                                       onChange={this.handleUserInput}  />
                            <input className={classes.log_in} type="submit" value="Войти" onClick={()=>{localStorage.setItem("token","тест");}} />
                            <div className={classes.forgot_pass}><a href="#">Забыли пароль?</a></div>
                        </form>
                        <div className={classes.registration}>Нет аккаунта?
                            <Link to='/register'> Регистрация</Link>
                        </div>
                    </div>
                    <div className={classes.ellipse_big}></div>
                    <div className={classes.pocket_messenger}><h1>Pocket Messenger</h1></div>
                    <div className={classes.for_geeks_by_geeks}><h2>For geeks by geeks</h2></div>
                    <div className={classes.ellipse_small}></div>
                </div>
            </div>
        )
    }
}

export default Form;