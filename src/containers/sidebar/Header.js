import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css';

export default class Header extends React.Component
{
    render(){
        return (
	        <li className={styles.ListItem}>
		        <NavLink to={this.props.href} className={styles.NonActiveTab} activeClassName={styles.ActiveTab}>
					{this.props.children}
		        </NavLink>
	        </li>		        
		)
	}
}

