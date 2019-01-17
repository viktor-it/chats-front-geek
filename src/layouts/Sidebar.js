import React from 'react';
    
import Menu from '../components/menu/Menu';

import Header from '../components/sidebar/Header';
import Main from '../components/sidebar/Main';


import styles from  './Sidebar.module.css';


class Sidebar extends React.Component {
    //state - для переключения списка чатов/контактов
    state = {
        active: 1
    };

    render(){

        return(
            <section className={styles.Sidebar}>
                {/* бургер */}
                <Menu />

                {/* чаты vs контакты */}
                <div className={styles.Tabs}>
                    <div className={styles.Tab}
                    onClick={() => this.setState({ active: 1 })}>
                        <Header href="/chats">
                            <i className={(this.state.active === 1) ? 
                            styles.IconActive + ' fas fa-envelope' : 
                            styles.Icon + ' fas fa-envelope'}/>
                            <span className={(this.state.active === 1) ? 
                            styles.TextActive : styles.Text}>Чаты</span>
                        </Header>
                    </div>
                    <div className={styles.Tab}
                    onClick={() => this.setState({ active: 2 })}>
                        <Header href="/contacts">
                            <i className={(this.state.active === 2) ? 
                            styles.IconActive + ' fas fa-user-friends' : 
                            styles.Icon + ' fas fa-user-friends'}/>
                            <span className={(this.state.active === 2) ? 
                            styles.TextActive : styles.Text}>Контакты</span>
                        </Header>
                    </div>                
                </div>

                {/*списки, профили*/}
                <Main />

            </section>
        )
    }
}


export default Sidebar;

