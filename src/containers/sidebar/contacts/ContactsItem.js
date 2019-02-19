import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ContactsItem.module.css';

import {setActiveChat} from '../../../store/actions/index';

import { connect } from 'react-redux';
import { editContacts, deleteContacts } from '../../../store/actions/';

class ContactsItem extends React.Component {
    componentWillMount(){
        this.clickTimeout = null
    }

    handleClicks = () => {
        //двойной клик - открывает профиль
        if (this.clickTimeout !== null) { 
            this.props.profileToggle(this.props); 

            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
        } else {
        //одиночный клик - передает активный чат
            this.props.dispatch(setActiveChat(this.props.id, 2));  
            this.clickTimeout = setTimeout(() => {
                clearTimeout(this.clickTimeout)
                this.clickTimeout = null
                }, 2000)
        }
    }

    state = {
        name: ''
    }

    handleEditClick(name) {
        return (e) => this.props.dispatch(editContacts(name));
    }

    handleDeleteClick(id) {
        return (e) => this.props.dispatch(deleteContacts(id));
    }

    render(){
        return (
            <div className={styles.Block} onClick = {this.handleClicks}>
                <NavLink className={styles.Item} to={`/contacts/${this.props.id}`}>
                    <div className={styles.Img}>
                        <img src = {this.props.img} className = {styles.Icon} alt = "contact_icon"/>
                    </div>
                    <div className={styles.Contact}>
                        <div className={styles.Name}>
                            {this.props.name}
                        </div>
                        <div className={styles.Text}>
                            {this.props.text}
                        </div>
                    </div>
                    <div className={styles.Time}>
                        {this.props.time}
                    </div>
                    <div className={styles.Mark}>
                        {/*this.props.mark*/}
                    <button onClick={deleteContacts}></button>
                    <button onClick={editContacts}>
                                    {/* <i class="far fa-edit"></i>                                   */}
                            </button>
                    </div>                
                </NavLink>
            </div>
        );
    }
}

//function mapStateToProps(store){};

export default connect(null)(ContactsItem);