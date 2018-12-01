import React, { Component } from 'react';
    
import Menu from '../containers/sidebar/Menu';

import Header from '../components/sidebar/Header';
import Main from '../components/sidebar/Main';

import styles from  './Sidebar.module.css';


const Sidebar = () => (
    <section className={styles.Sidebar}>
        {/* бургер */}
        <Menu />

        {/* чаты vs контакты */}
        <ul className={styles.Tabs}>
            <Header href="/chats">
                <i className={styles.Icon + ' fas' + ' fa-envelope'} /> 
                <span className={styles.Text}>Чаты</span>
            </Header>
            <Header href="/contacts">
                <i className={styles.Icon + ' fas' + ' fa-user-friends'} />
                <span className={styles.Text}>Контакты</span>
            </Header>
        </ul>
        
        <Main />
        
    </section>
)

export default Sidebar;
