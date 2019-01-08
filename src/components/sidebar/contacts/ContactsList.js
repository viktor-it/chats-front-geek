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

    console.log(props.contacts);

    return (
        <div>
            <div className={styles.List}>        
                {contacts}
            </div>
        </div>
    );
}

export default ContactsList