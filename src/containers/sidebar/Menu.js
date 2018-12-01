import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from  './Menu.module.css';

class Menu extends Component {
		state = {
			condition: false
		}

		handleClick = () => {
			console.log(this.state);
			this.setState({
      			condition: !this.state.condition
    		});
    	}

		render() {
	        return (
				<div className={styles.Menu + ' ' + styles.SidebarItem}>
			    	<div onClick={ this.handleClick } className={styles.Burger}>
			    		<button className={styles.BurgerIcon}>
			    			<div className={styles.BurgerLine + ' ' + styles.BurgerLineFirst} />
			    			<div className={styles.BurgerLine + ' ' + styles.BurgerLineSecond} />
			    			<div className={styles.BurgerLine + ' ' + styles.BurgerLineFourth} />
			    		</button>
			    		<label htmlFor="check-menu" className={styles.BurgerLabel}>
			    			<form action="true" className={styles.BurgerSearch + ' ' + styles.Search} />
			    			<input type="search" className={styles.BurgerInput} value="Найти..." />
			    		</label>
			    	</div>
			    	<nav className={this.state.condition ? styles.MainMenuOpened : styles.MainMenuClosed} >
						<NavLink className={styles.BurgerItem} to='/account'>Личный кабинет</NavLink>
						<NavLink className={styles.BurgerItem} to='/profile'>Профиль</NavLink>
						<NavLink className={styles.BurgerItem} to='/auth'>Выйти</NavLink>
					</nav>
			    </div>
	        );
	    }
}

export default Menu
