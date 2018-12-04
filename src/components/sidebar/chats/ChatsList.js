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
            <button onClick={props.createGroup} >
                    Создать свою группу
            </button>
            {/* <button onClick={() => {this.state.active = 3;this.switchComponent(this.state.active)}} > */}
            <button onClick={props.searchGroup} >
                    Добавить группу
            </button>
        </div>
    );
}

export default ChatsList