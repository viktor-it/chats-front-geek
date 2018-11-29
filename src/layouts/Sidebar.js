import React, { Component } from 'react';
    
import Menu from '../components/sidebar/Menu';

import Header from '../containers/sidebar/Header';
import Main from '../components/sidebar/Main';

import styles from  './Sidebar.module.css';

// let classNames = require('classnames/dedupe'); //для объединения классов

class Sidebar extends Component
{
    render(){
        // let IconEnvClass = classNames('fas', 'fa-envelope', styles.Fas);
        // let IconUserClass = classNames('fas', 'fa-user-friends', styles.Fas);
        return (
            <div className={styles.Sidebar}>
                {/* бургер */}
                <Menu />

                {/* чаты vs контакты */}
                <div className={styles.Tabs}>
                    <Header href="/chats">
                        {/* <i className={IconEnvClass} /> */}
                        <span className={styles.Text}>Чаты</span>
                    </Header>
                    <Header href="/contacts">
                        {/* <i className={IconUserClass} /> */}
                        <span className={styles.Text}>Контакты</span>
                    </Header>

                    <Main />
                </div>
            </div>
        )
    }
}

export default Sidebar;
