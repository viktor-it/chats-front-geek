import React from 'react';
    
import Menu from '../containers/sidebar/Menu';

import Header from '../components/sidebar/Header';
import Main from '../components/sidebar/Main';



import styles from  './Sidebar.module.css';


class Sidebar extends React.Component {
    state = { 
        chatsHovered: false,
        contactsHovered: false,
        ChatsCondition: false,
        ContactsCondition: false
    }

    ChatsHover = () => {
        this.setState({
            ChatsCondition: !this.state.ChatsCondition
        });
    }

    ContactsHover = () => {
        this.setState({
            ContactsCondition: !this.state.ContactsCondition
        });
    }

    render() {
        return(
            <section className={styles.Sidebar}>
                {/* бургер */}
                <Menu />

                {/* чаты vs контакты */}
                <div className={styles.Tabs}>
                    <div
                        onMouseEnter={this.ChatsHover}
                        onMouseLeave={this.ChatsHover}
                    >
                        <Header href="/chats">
                            <i className={this.state.ChatsCondition ? styles.IconHovered + ' fas fa-envelope' : styles.Icon + ' fas fa-envelope'} /> 
                            <span className={this.state.ChatsCondition ? styles.TextHovered : styles.Text}>Чаты</span>
                        </Header>
                    </div>
                    <div
                        onMouseEnter={this.ContactsHover}
                        onMouseLeave={this.ContactsHover}
                    >
                        <Header href="/contacts">
                            <i className={this.state.ContactsCondition ? styles.IconHovered + ' fas fa-user-friends' : styles.Icon + ' fas fa-user-friends'} />
                            <span className={this.state.ContactsCondition ? styles.TextHovered : styles.Text}>Контакты</span>
                        </Header>
                    </div>
                </div>
                
                {/*списки*/}
                <Main />

            </section>
        )
    }
}


export default Sidebar;
