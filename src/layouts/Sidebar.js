import React from 'react';

import Menu from '../containers/menu/Menu'
import ChatsList from '../components/ChatsList'
import ContactsList from '../components/ContactsList'

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
			    <ChatsList href="/chats" active={this.isActive('/chats')}/>
			    <ContactsList href="/contacts" active={this.isActive('/contacts')}/>
			</div>
		)
    }
}



/* const Sidebar = () => (
  <div>

    <Menu />

    <ChatsList />
    <ContactsList />
  </div>
  export default Sidebar;
*/

