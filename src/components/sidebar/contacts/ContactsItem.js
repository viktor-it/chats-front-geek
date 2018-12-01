import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ContactsItem.module.css';

const ContactsItem = (props) => {

    return (
        <div className={styles.Block}>
            <NavLink className={styles.Item} to={`/contacts/${props.id}`}>
                <div className={styles.Img}>
                    <div style={{backgroundImage: `url(${props.img})`, height:'60px', width:'60px'}} />
                </div>
                <div className={styles.Contact}>
                    <div className={styles.Name}>
                        {props.name}
                    </div>
                    <div className={styles.Text}>
                        {props.text}
                    </div>
                </div>
                <div className={styles.Time}>
                    {props.time}
                </div>
                <div className={styles.Mark}>
                    {/*props.mark*/}
                </div>                
            </NavLink>
        </div>
    );
}

export default ContactsItem