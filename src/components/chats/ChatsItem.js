import React from 'react';
import {Link} from 'react-router-dom';

export default class ChatsItem extends React.Component
{
    render()
    {   
        return (
            <div className="chats__block" style={{width:'100px',height:'100px',backgroundColor:'green'}}>
                <Link className="chats__item" to={`/chats/${this.props.id}`}>
                    <div className="chats__img">
                        img
                    </div>
                    <div className="chats__title">
                        title{/*{this.props.title}*/}
                    </div>
                    <div className="chats__unread">
                        unread
                    </div>
                    <div className="chats__time">
                        time
                    </div>
                    <div className="chats__mark">
                        mark
                    </div>
                </Link>
            </div>
        );
    }
}