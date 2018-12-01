import React from 'react';
import ContactsItem from './ContactsItem';

const ContactsList = (props) => {
    if(!props.contacts.length){
        return null; //Если данные еще загружаются
    }

    let contacts = props.contacts.map((user, index) => {
        return <ContactsItem key={index} {...user} />
    });

    return (
        <div>
            <div className="List">
                {contacts}
            </div>
        </div>
    );
}

export default ContactsList