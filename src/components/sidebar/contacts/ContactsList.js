import React from 'react';
import ContactsItem from './ContactsItem';

import styles from './ContactsList.module.css';


const ContactsList = (props) => {
    if(!props.contacts.length){
        return null; //Если данные еще загружаются
    }

    let contacts = props.contacts.map((user, index) => {
        return <ContactsItem key={index} {...user} />
    });

    return (
        <div>
            <div className={styles.List}>
                {contacts}
            </div>
            <button className={styles.Button} onClick={props.addContact} >
                <div className={styles.Icon}>+</div>
                <span className={styles.Text}> Добавить контакт</span>                      
            </button>
        </div>
    );
}

export default ContactsList