import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../containers/sidebar/Chats'
import Contacts from '../../containers/sidebar/Contacts'


const Main = () => (
	<main>
		<Switch>
			<Route path='/chats' component={Chats}/>
			<Route path='/contacts' component={Contacts}/>
            <Route path='/form' component={Form}/>
		</Switch>
	</main>
)

export default Main
