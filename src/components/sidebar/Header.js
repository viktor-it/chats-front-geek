import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css';

const Header = (props) => (
    <li className={styles.ListItem}>
        <NavLink to={props.href} className={styles.Tab} activeClassName={styles.ActiveTab}>
			{props.children}
        </NavLink>
    </li>		        
)

export default Header