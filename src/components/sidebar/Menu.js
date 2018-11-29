import React from 'react'
import { NavLink } from 'react-router-dom'

// навигация
const Menu = () =>
	(
	    <nav>
			<ul>
				<li><NavLink to='/account'>Личный кабинет</NavLink></li>
				<li><NavLink to='/profile'>Профиль</NavLink></li>
				<li><NavLink to='/auth'>Выйти</NavLink></li>
			</ul>
	    </nav>
	);

export default Menu
