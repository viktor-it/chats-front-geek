import React, { Component } from 'react';

import styles from './User.module.css';

const User = (props) => {
    return (
        <div className={styles.Contact}>
        	<div>{props.user.img}</div>
        	<div>{props.onlineMark}</div>
        	<div>Профиль</div>
        	<div>{props.user.email}</div>
        	<div>{props.user.name}</div>

            <button className={styles.Button}
                    onClick = {() => {props.addContact()}}
            >
                Пригласить
            </button>

            <button className={styles.Button}
                    onClick = {() => {props.searchShow()}}
            >
                Закрыть
            </button>
        </div>
    );
}

export default User;