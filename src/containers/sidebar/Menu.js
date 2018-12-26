import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {logoutUser} from '../../store/actions';

import Modal from  './Modal';

class Menu extends Component {
		state = {
			condition: false,
			showModal: false
		}

		handleClick = () => {
			this.setState({
      			condition: !this.state.condition
    		});
    	}
    	searchShow = () => {
		    this.setState({showModal: true});
		}
  
		searchHide = () => {
			this.setState({showModal: false});
		}

		render() {
	
			// модальное окно для вывода найденных контактов
			const modal = this.state.showModal ? (
				<Modal>
					<div className={styles.ModalField}>
						<button>
							Пригласить
						</button>
						<button onClick={this.searchHide}>
							Отменить
						</button>
					</div>
				</Modal>
			) : null;


	        return (
				<div className={styles.Menu + ' ' + styles.SidebarItem}>
					{/*иконка меню - гамбургер*/}
			    	<div onClick={ this.handleClick } className={styles.Burger}>
		    			<span className={styles.BurgerLine}/>		    		
			    	</div>

			    	{/*поиск контактов*/}
			    	<input type="text" className={styles.Search}
			    	onClick={this.searchShow} placeholder="Найти..." />

			    	{modal} {/*вставится в блок с id="modal-root" (Main.js) */}

			    	{/*список компонентов меню*/}
			    	<nav className={this.state.condition ? styles.MainMenuOpened : styles.MainMenuClosed} >
						<NavLink
						className={styles.BurgerItem}
						to='/account'>
							Личный кабинет
						</NavLink>
						<NavLink
						className={styles.BurgerItem}
						to='/profile'>
							Профиль
						</NavLink>
						<div className={styles.BurgerItem}
						onClick={() => {this.props.dispatch(logoutUser())}}>
							Выйти
						</div>
					</nav>
			    </div>
	        );
	    }
}

export default connect()(Menu);
