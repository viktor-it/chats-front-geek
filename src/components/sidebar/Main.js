import React from 'react'
import { Switch, Route } from 'react-router-dom'

<<<<<<< HEAD
import Chats from '../../containers/sidebar/chats/Chats'
import Contacts from '../../containers/sidebar/contacts/Contacts'
import Form from '../authform/Form'
=======
import Chats from '../../containers/sidebar/Chats'
import Contacts from '../../containers/sidebar/Contacts'
>>>>>>> develop-upstream


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
