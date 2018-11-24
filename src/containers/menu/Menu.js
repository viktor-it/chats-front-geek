import React from 'react'
import { Link } from 'react-router-dom'

// навигация
const Menu = () =>
	(
	    <nav>
	      <ul>
	        <li><Link to='/account'>Личный кабинет</Link></li>
	        <li><Link to='/profile'>Профиль</Link></li>
	        <li><Link to='/auth'>Выйти</Link></li>
	      </ul>
	    </nav>
	)
;

export default Menu
