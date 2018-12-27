import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {logoutUser} from '../../store/actions';

import Modal from  './Modal';
import SearchList from  './SearchList';


import ContactsAPI from '../../store/reducers/contactsStub'

import $ from 'jquery';


class Menu extends Component {
		state = {
			condition: false,
			showModal: false,
			initialItems: [
				"Вася Васильков",
				"Сима Симаков",
				"Петя Петров",
				"Петя Иванов",
				"Анна Иванова"
			],
			items: [],
			addItem: ''
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

		searchResult = (event) => {
			if (event.key === 'Enter') {

		    	let updatedList = this.state.initialItems;

    			updatedList = updatedList.filter(function(item){
      				return item.search(event.target.value) !== -1;
    			});

    			this.setState({items: updatedList});
		    }
		}


		//добавляем имя для последующего добавления в общий список;
		//выделяем цветом выбранного пользователя
		updateData = (value) => {
			this.setState({ addItem: value });
			$('.ListItem').css('background-color', 'white');
			$("[data-category='" + value + "']").css('background-color', 'grey');
		}

		//добавление контакта в общий список
		addContact = () => {
		    ContactsAPI.addContact(this.state.addItem);
		}

		componentWillMount() {
    		this.setState({items: this.state.initialItems})
		}

		render() {
			// модальное окно для вывода найденных контактов
			const modal = this.state.showModal ? (
				<Modal>
					<div className={styles.ModalField}>

						{/*список найденных контактов*/}
						<SearchList 
							items={this.state.items}
							updateData={this.updateData}
						/>

						<button onClick={this.addContact}>
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
			    	<input
			    		placeholder="Найти..."
			    		type="text"
			    		className={styles.Search}
			    		onClick={this.searchShow}
			    		onKeyPress={this.searchResult}
			    	/>

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
