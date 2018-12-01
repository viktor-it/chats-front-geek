import React, { Component } from 'react';
    
import Menu from '../containers/sidebar/Menu';

import Header from '../components/sidebar/Header';
import Main from '../components/sidebar/Main';

import styles from  './Sidebar.module.css';


class Sidebar extends Component
{
    render(){
        return (
            <section className={styles.Sidebar}>
                {/* бургер */}
                <Menu />

                {/* чаты vs контакты */}
                <ul className={styles.Tabs}>
                    <Header href="/chats">
                        <i className={styles.Fas + ' fas' + ' fa-envelope'} /> 
                        <span className={styles.Text}>Чаты</span>
                    </Header>
                    <Header href="/contacts">
                        <i className={styles.Fas + ' fas' + ' fa-user-friends'} />
                        <span className={styles.Text}>Контакты</span>
                    </Header>

                    <Main />
                </ul>
            </section>
        )
    }
}

export default Sidebar;
