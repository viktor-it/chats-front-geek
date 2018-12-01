import React from 'react';
import ChatsItem from './ChatsItem';

const ChatsList = (props) => {
    if(!props.chats.length){
        return null; //Если данные еще загружаются
    }

    let chats = props.chats.map((chat, index) => {
        return <ChatsItem key={index} {...chat} />
    });

    return (
        <div>
            <div className="chats__list">
                {chats}
            </div>
        </div>
    );
}

export default ChatsList