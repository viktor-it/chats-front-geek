import React, { Component } from 'react';
    
import Menu from '../components/sidebar/Menu';

import Header from '../containers/sidebar/Header';
import Main from '../components/sidebar/Main';

class Sidebar extends Component
{
    render(){
        return (
            <div>
            {/* бургер */}
                <Menu />
                {/* чаты vs контакты */}
                <div>
                    <Header href="/chats">
                    Чаты
                    </Header>
                    <Header href="/contacts">
                    Контакты
                    </Header>

                    <Main />
                </div>
            </div>
        )
    }
}

export default Sidebar;
