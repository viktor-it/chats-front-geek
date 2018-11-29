import React from 'react';
import ChatsItem from './ChatsItem';

class ChatsList extends React.Component
{
    render()
    {
        if(!this.props.chats.length){
            return null; //Если данные еще загружаются
        }

        let chats = this.props.chats.map((chat, index) => {
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
}

export default ChatsList