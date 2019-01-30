import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ChatsItem.module.css';

import {setActiveChat, getGroupProfile} from '../../../store/actions/index';
import {connect} from 'react-redux';

class ChatsItem extends React.Component {

    componentWillMount(){
        this.clickTimeout = null
    }

    handleClicks = () => {

        //двойной клик - открывает профиль
        if (this.clickTimeout !== null) { 
            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;

            this.props.profileToggle(); 
        } else {
        //одиночный клик - передает активный чат            
            this.props.dispatch(setActiveChat(this.props.id, 1));
            this.props.setProfile(this.props.id); 
            
            this.clickTimeout = setTimeout(() => {
                clearTimeout(this.clickTimeout)
                this.clickTimeout = null
                }, 2000)

        }
    }


    render(){
        return(
            <div className = {styles.Block} onClick = {this.handleClicks}>
                <NavLink to = {`/chats/${this.props.id}`}>
                    <div className = {styles.Item} onClick = {this.getProfile}>               
                        <div className = {styles.Img}>
                            <img src = {this.props.img} className = {styles.Icon} alt = "group_icon"/>
                        </div>
                        
                        <div className = {styles.Chat}>
                            <div className = {styles.Title}>
                                {this.props.name}
                            </div>
                            <div className = {styles.Text}>
                                {this.props.text}
                            </div>
                        </div>
                        <div className = {styles.Unread}>
                            {this.props.unread}
                        </div>
                        <div className = {styles.Time}>
                            {this.props.time}
                        </div>
                        <div className = {styles.Mark}>
                            {/*this.props.mark*/}
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
};


export default connect(null)(ChatsItem);
