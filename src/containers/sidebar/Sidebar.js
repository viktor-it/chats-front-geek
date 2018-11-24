import React from 'react';

import Menu from './Menu'
import ChatsList from './ChatsList'
import ContactsList from './ContactsList'

const Sidebar = () => (
  <div>
    {/* бургер */}
    <Menu />

    {/* чаты vs контакты */}
    <ChatsList />
    <ContactsList />
  </div>
)

export default Sidebar;