import React from 'react';
    
import Menu from '../containers/sidebar/Menu';

import Header from '../components/sidebar/Header';
import Main from '../components/sidebar/Main';


import styles from  './Sidebar.module.css';


const Sidebar = () => {
    return(
        <section className={styles.Sidebar}>
            {/* бургер */}
            <Menu />

            {/* чаты vs контакты */}
            <div className={styles.Tabs}>
                <div className={styles.Tab}>
                    <Header href="/chats">
                        <i className={styles.Icon + ' fas fa-envelope'} />
                        <span className={styles.Text}>Чаты</span>
                    </Header>
                </div>
                <div className={styles.Tab}>
                    <Header href="/contacts">
                        <i className={styles.Icon + ' fas fa-user-friends'} />
                        <span className={styles.Text}>Контакты</span>
                    </Header>
                </div>                
            </div>

            {/*списки, профили*/}
            <Main />

        </section>
    )
}


export default Sidebar;

