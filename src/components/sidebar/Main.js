import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../containers/sidebar/Chats'
import Contacts from '../../containers/sidebar/Contacts'

import styles from  './Main.module.css';


const Main = () => (
	<main className={styles.Field}>
		<Switch>
			<Route path='/chats' component={Chats}/>
			<Route path='/contacts' component={Contacts}/>
		</Switch>
	</main>
)

export default Main
