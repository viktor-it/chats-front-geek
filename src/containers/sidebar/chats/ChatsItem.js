import React from 'react';
import {NavLink} from 'react-router-dom';

class ChatsItem extends React.Component {
    render(){

        return (
            <div className="chats__block" style={{width:'100px',height:'100px',backgroundColor:'green'}}>
                <NavLink className="chats__item" to={`/chats/${this.props.id}`}>
                    <div className="chats__img">
                        <div style={{backgroundImage: `url(${this.props.img})`, height:'60px', width:'60px'}} />
                    </div>
                    <div className="chats__title">
                        {this.props.title}
                    </div>
                    <div className="chats__text">
                        {this.props.text}
                    </div>
                    <div className="chats__unread">
                        {this.props.unread}
                    </div>
                    <div className="chats__time">
                        {this.props.time}
                    </div>
                    <div className="chats__mark">
                        {this.props.mark}
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ChatsItem