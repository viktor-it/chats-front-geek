import React from 'react';

import ContactsItem from './ContactsItem';
import ProfileUser from '../../../components/profiles/profileUser/ProfileUser';
import Modal from  '../../../components/UI/Modal/Modal';

import styles from './ContactsList.module.css';


class ContactsList extends React.Component {
    state = {
        modal: false,
        profile: {}
    }

    openProfile = (data) => {
        this.setState({
            modal: true,
            profile: data
        });         
    }

    closeProfile = () => {
        this.setState({
            modal: false
        });         
    }

    render(){
        if(!this.props.contacts.length){
            return null; //Если данные еще загружаются
        }

        let profile = this.state.modal ? (
            <>
                <Modal classesNames = 'SearchContacts'>   
                    <ProfileUser profile = {this.state.profile} closeProfile = {this.closeProfile}/>
                </Modal>
            </>
        ) : null;

        let contacts = this.props.contacts.map((user, index) => {
            return <ContactsItem key={index} openProfile = {this.openProfile} {...user} />
        });

        return (
            <div>
                <div className={styles.List}>        
                    {contacts}
                </div>

                <div>
                    {profile}
                </div>
            </div>
        );
    }
}

export default ContactsList