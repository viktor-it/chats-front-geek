import React from 'react';

import styles from './Contact.module.css';

const Contact = (props) => {
    return (
        <div className={styles.Contact}>
        	<div>{props.img}</div>
        	<div>{props.onlineMark}</div>
        	<div>Профиль</div>
        	<div>{props.email}</div>
        	<div>{props.name}</div>

    		{/*по клику добавить контакт в список и закрыть форму*/}
            <button className={styles.Button} onClick={ () => {props.addContact}; {props.closeContact} }>
                Добавить
            </button>
        </div>
    );
}

export default Contact;