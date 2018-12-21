import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../containers/sidebar/Chats'

import ChatsSwitch from './chats/ChatsSwitch' 

import Contacts from '../../containers/sidebar/Contacts'



import Profile from '.././profiles/profile/Profile'

import styles from  './Main.module.css';


const Main = () => (
	<main className={styles.Field}>
		<Switch>
			{/*<Route path='/' exact component={Chats}/>
			<Route path='/chats' component={Chats}/>*/}

			
			<Route path='/' exact component={Chats}/>
			<Route path='/chats' component={ChatsSwitch}/>

			<Route path='/contacts' component={Contacts}/>

			<Route path='/profile' component={Profile}/> {/*временный компонент, заменить на ProfileUser*/}

		</Switch>
	</main>
)

export default Main
