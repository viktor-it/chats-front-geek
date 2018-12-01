import React from 'react';

import Sidebar from '../layouts/Sidebar';
// import SidePanel from '../containers/SidePanel/SidePanel';
// import ChatWindow from '../containers/ChatWindow/ChatWindow';
// import Form from '../components/authform/Form'

import classes from './MainPage.module.css';

const mainPage = () => {
    return (
        <div className={classes.mainPage}>
             <Sidebar/>
             <div className={classes.chatWindow}>
             </div>
            {/* <ChatWindow/> */}
            {/*<Form/>*/}
        </div>
    );
}

export default mainPage;