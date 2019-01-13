import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ChatsItem.module.css';

import {setActiveChat} from '../../../store/actions/index';

import {connect} from 'react-redux';

class ChatsItem extends React.Component {
    render(){
        return(
            <div className = {styles.Block}
                //передаем активный чат по клику
                onClick = {() => {this.props.dispatch(setActiveChat(this.props.id))}}>
                <NavLink to = {`/chats/${this.props.id}`}>
                    <div className = {styles.Item}>               
                        <div className = {styles.Img}>
                            <img src = {this.props.img} className = {styles.Icon} alt = "group_icon"/>
                        </div>
                        
                        <div className = {styles.Chat}>
                            <div className = {styles.Title}>
                                {this.props.title}
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

function mapStateToProps(store){};

export default connect(mapStateToProps)(ChatsItem);