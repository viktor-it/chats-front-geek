import React from 'react';

import Menu from '../containers/menu/Menu';

import Header from '../components/Header';
import Main from '../containers/Main';

export default class Sidebar extends React.Component
{
  isActive(href)
  {
      return window.location.pathname === href;
  }
  render(){
      return (
      	<div>
			    {/* бургер */}
			    <Menu />
			    {/* чаты vs контакты */}
          <div>
            <Header href="/chats" active={this.isActive('/chats')}>
                Чаты
            </Header>
            <Header href="/contacts" active={this.isActive('/contacts')}>
                Контакты
            </Header>

            <Main />
          </div>
		   </div>
	)
  }
}


