import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {logoutUser} from '../../store/actions';

class Menu extends Component {
		state = {
			condition: false
		}

		handleClick = () => {
			this.setState({
      			condition: !this.state.condition
    		});
    	}

		render() {
	        return (
				<div className={styles.Menu + ' ' + styles.SidebarItem}>
			    	<div onClick={ this.handleClick } className={styles.Burger}>
		    			<span className={styles.BurgerLine}/>		    		
			    	</div>
			    	<input type="search" className={styles.BurgerSearch} value="Найти..." />
			    	<nav className={this.state.condition ? styles.MainMenuOpened : styles.MainMenuClosed} >
						<NavLink className={styles.BurgerItem} to='/account'>Личный кабинет</NavLink>
						<NavLink className={styles.BurgerItem} to='/profile'>Профиль</NavLink>
						<div className={styles.BurgerItem} onClick={() => {this.props.dispatch(logoutUser())}}>Выйти</div>
					</nav>
			    </div>
	        );
	    }
}

export default connect()(Menu);
