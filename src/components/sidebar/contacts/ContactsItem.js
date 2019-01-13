import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ContactsItem.module.css';

import {setActiveChat} from '../../../store/actions/index';

import {connect} from 'react-redux';

class ContactsItem extends React.Component {
    render(){
        return (
            <div className={styles.Block}
                //передаем активный чат по клику
                onClick = {() => {this.props.dispatch(setActiveChat(this.props.id))}}>
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
                    </div>                
                </NavLink>
            </div>
        );
    }
}

function mapStateToProps(store){};

export default connect(mapStateToProps)(ContactsItem);