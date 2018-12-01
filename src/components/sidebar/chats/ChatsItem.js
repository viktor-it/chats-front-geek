import React from 'react';
import {NavLink} from 'react-router-dom';

const ChatsItem = (props) => (
    <div className="chats__block" style={{width:'100px',height:'100px',backgroundColor:'green'}}>
        <NavLink className="chats__item" to={`/chats/${props.id}`}>
            <div className="chats__img">
                <div style={{backgroundImage: `url(${props.img})`, height:'60px', width:'60px'}} />
            </div>
            <div className="chats__title">
                {props.title}
            </div>
            <div className="chats__text">
                {props.text}
            </div>
            <div className="chats__unread">
                {props.unread}
            </div>
            <div className="chats__time">
                {props.time}
            </div>
            <div className="chats__mark">
                {/*props.mark*/}
            </div>
        </NavLink>
    </div>
);

export default ChatsItem