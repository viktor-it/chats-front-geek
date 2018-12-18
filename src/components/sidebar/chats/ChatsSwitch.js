import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../../containers/sidebar/Chats'
import ChatProfile from './ChatProfile'


const ChatsSwitch = () => (
	<Switch>
		<Route exact path='/chats' component={Chats}/>
		<Route path='/chats/:id' component={ChatProfile}/>
	</Switch>
)


export default ChatsSwitch
