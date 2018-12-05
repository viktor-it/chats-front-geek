import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css';

const Header = (props) => (
        <NavLink to={props.href} className={styles.Tab} activeClassName={styles.ActiveTab}>
			{props.children}
        </NavLink>	        
)



export default Header
