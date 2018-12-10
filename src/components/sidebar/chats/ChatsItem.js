import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ChatsItem.module.css';

const ChatsItem = (props) => {
    return(
    <div className={styles.Block}>
        <NavLink className={styles.Item} to={`/chats/${props.id}`}>
            <div className={styles.Img}>
                <div style={{backgroundImage: `url(${props.img})`, height:'60px', width:'60px'}} />
            </div>
            <div className={styles.Chat}>
                <div className={styles.Title}>
                    {props.title}
                </div>
                <div className={styles.Text}>
                    {props.text}
                </div>
            </div>
            <div className={styles.Unread}>
                {props.unread}
            </div>
            <div className={styles.Time}>
                {props.time}
            </div>
            <div className={styles.Mark}>
                {/*props.mark*/}
            </div>
        </NavLink>
    </div>
)
};

export default ChatsItem