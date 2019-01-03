import React, {Component} from 'react';
import {connect} from 'react-redux';
import openSocket from 'socket.io-client';

import Sidebar from '../layouts/Sidebar';
// import SidePanel from '../containers/SidePanel/SidePanel';
// import ChatWindow from '../containers/ChatWindow/ChatWindow';

import MessageForm from '../containers/Messages/messageForm';

import classes from './MainPage.module.css';

class MainPage extends Component
{
    componentDidMount() {
        // const socket = openSocket('wss://pocketmsg.ru:8888',{ 
        //     path: '/v1/ws/',
        //     transportOptions: {
        //         polling: {
        //             extraHeaders: {
        //                 'token': localStorage.getItem('token')
        //             }
        //         }
        //     }
        // });
        // console.log(socket.id);
        // socket.on('connect', () => {
        //     console.log(socket.id); // 'G5p5...'
        //   });
        // socket.on('messages:new', data => {
        //     console.log(data);
        // });
    }

    render() {
        return (
            <div className={classes.mainPage}>
                <Sidebar/>
                <div className={classes.chatWindow}>
                    <MessageForm/>
                </div>
                {/* <ChatWindow/> */}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        activeContact: store.contacts.activeContact
    }
}

export default connect(mapStateToProps)(MainPage);