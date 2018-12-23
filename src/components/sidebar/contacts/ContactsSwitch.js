import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Contacts from '../../../containers/sidebar/Contacts'
import ProfileUser from '../../profiles/profileUser/ProfileUser'


const ContactsSwitch = () => (
	<Switch>
		<Route exact path='/contacts' component={Contacts}/>
		<Route path='/contacts/:id' component={ProfileUser}/>
	</Switch>
)


export default ContactsSwitch