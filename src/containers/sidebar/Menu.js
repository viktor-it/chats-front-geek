import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {logoutUser} from '../../store/actions';
import {getUsers} from '../../store/actions';


import Modal from  './Modal';
import SearchList from  './SearchList';


import ContactsAPI from '../../store/reducers/contactsStub'

class Menu extends Component {

		state = {
			condition: false,
			showModal: false,

			initialItems: [],
			items: [],
			addItem: '',
			active: 0
		}

		handleClick = () => {
			this.setState({
      			condition: !this.state.condition
    		});
    	}
    	searchShow = () => {
		    this.setState({
		    	showModal: true,
		    	initialItems: this.props.users,
		    	items: this.props.users
    		});		    
		}
  
		searchHide = () => {
			this.setState({showModal: false});
		}

		searchResult = (event) => {
			if (event.key === 'Enter') {

				let allUsers = this.state.initialItems;

				// фильтр-поиск
    			let updatedList = allUsers.filter(function(item){
      				return item.name == event.target.value;
    			});

    			this.setState({items: updatedList});
		    }
		}		
		
		updateData = (value) => {
			//добавляем имя для последующего добавления в общий список;
			this.setState({ addItem: value });

			//выделяем цветом выбранного пользователя
			let user = this.state.initialItems.find(x => x.name === value);

			let userId = user.id;

			this.setState({active: userId});
		}

		//добавление контакта в общий список
		addContact = () => {
			//this.props.dispatch(addContact(this.state.addItem));
		}

		componentWillMount() {
    		this.setState({items: this.state.initialItems});

			//загрузить всех пользователей
    		this.props.dispatch(getUsers());
		}

		render() {

	        let users = this.state.items.map((user, index) => {
	            return <SearchList 
	            		updateData={this.updateData}
	            		key={index} {...user}
	            		active={this.state.active}/>
	        });

			// модальное окно для вывода найденных контактов
			const modal = this.state.showModal ? (
				<Modal>
					<div className={styles.ModalField}>

						{users}

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

function mapStateToProps(store) {
    return {
        users: store.users.users,
		is_loading_users: store.users.is_loading,
    }
}

export default connect(mapStateToProps)(Menu);
