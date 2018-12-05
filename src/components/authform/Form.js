import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FormErrors } from './FormErrors';

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
            <form className={classes.FormGlobalClass}>
                <h2>Войдите под своим логином</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={classes.FormAuthGroup}>
                    <div className={classes.containerLogin}>
                        <input className={classes.formControl} type="email" required name="email"
                               placeholder="Email address"
                               value={this.state.email}
                               onChange={this.handleUserInput} />
                    </div>
                </div>
                <div className={classes.FormAuthGroup}>
                    <div className={classes.containerLogin}>
                        <input className={classes.formControl} type="password" name="password"
                               placeholder="Password"
                               value={this.state.password}
                               onChange={this.handleUserInput}  />
                    </div>
                </div>

                <button type="submit" className={classes.btnSubmit} onClick={()=>{localStorage.setItem("token","тест");}}>Войти</button>
                <div>
                    <span>Нет аккаунта? </span>
                    <Link to='/register'>Регистрация</Link>
                </div>
            </form>
        )
    }
}

export default Form;