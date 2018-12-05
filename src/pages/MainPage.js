import React from 'react';

import Sidebar from '../layouts/Sidebar';
// import SidePanel from '../containers/SidePanel/SidePanel';
// import ChatWindow from '../containers/ChatWindow/ChatWindow';

import MessageForm from '../containers/Messages/messageForm';

import classes from './MainPage.module.css';

const mainPage = () => {
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

export default mainPage;