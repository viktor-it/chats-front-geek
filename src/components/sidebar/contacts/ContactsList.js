import React from 'react';
import ContactsItem from './ContactsItem';

export default class ContactsList extends React.Component
{
    render()
    {
        if(!this.props.contacts.length){
            return null; //Если данные еще загружаются
        }

        let contacts = this.props.contacts.map((user, index) => {
            return <ContactsItem key={index} {...user} />
        });

        return (
            <div>
                <div className="contacts__list">
                    {contacts}
                </div>
            </div>
        );
    }
}