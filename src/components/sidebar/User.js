import React from 'react';

import styles from './User.module.css';

const Contact = (props) => {
    return (
        <div className={styles.Contact}>
        	<div>{props.user.img}</div>
        	<div>{props.onlineMark}</div>
        	<div>Профиль</div>
        	<div>{props.user.email}</div>
        	<div>{props.user.name}</div>

    		{/*по клику добавить контакт в список и закрыть форму*/}
            <button className={styles.Button}>
                Пригласить
            </button>
        </div>
    );
}

export default Contact;