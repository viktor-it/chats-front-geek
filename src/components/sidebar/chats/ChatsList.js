import React from 'react';
import ChatsItem from './ChatsItem';

import styles from './ChatsList.module.css';

const ChatsList = (props) => {
    if(!props.chats.length){
        return null; //Если данные еще загружаются
    }

    let chats = props.chats.map((chat, index) => {
        return <ChatsItem key={index} {...chat} />
    });
    return (
        <div>
            <div className={styles.List}>
                {chats}
            </div>

            {/*кнопки*/}
            <div className={styles.ButtonsBlock}>
                <button className={styles.Button}onClick={props.createGroup} >
                    <div className={styles.Icon}>+</div>
                    <span className={styles.Text}>Создать свою группу</span>
                </button>
                {/* <button onClick={() => {this.state.active = 3;this.switchComponent(this.state.active)}} > */}
                <button className={styles.Button} onClick={props.searchGroup} >
                    <div className={styles.Icon}>+</div>
                    <span className={styles.Text}> Добавить группу</span>                      
                </button>
            </div>
        </div>
    );
}

export default ChatsList