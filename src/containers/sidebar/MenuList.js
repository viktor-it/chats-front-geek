import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {logoutUser} from '../../store/actions';
import { connect } from 'react-redux';

import styles from './MenuList.module.css';

class MenuList extends Component {

	render(){
	    return (
	    	<>
		    	<div className = {styles.Header}>
		    		<i className = {styles.Button + ' fas fa-angle-left'}
		    			onClick = {() => {this.props.menuShow()}}/>
		    	</div>
		    	<nav className = {styles.List}>
					<NavLink
						className = {styles.Item}
						to = '/account'>
						<i className = {styles.Icon + ' fas fa-user'}/>
						<p className = {styles.Text}>Личный кабинет</p>
					</NavLink>
					<NavLink
						className={styles.Item}
						to = '/profile'>
						<i className = {styles.Icon + ' fas fa-user'}/>
						<p className = {styles.Text}>Профиль</p>
					</NavLink>
					<div className = {styles.Item}
						onClick = {() => {this.props.dispatch(logoutUser())}}>
						<i className = {styles.Icon + ' fas fa-user-times'}/>
						<p className = {styles.Text}>Выйти</p>
					</div>
				</nav>
			</>
	    );
	}
}


function mapStateToProps(store){}

export default connect(mapStateToProps)(MenuList);