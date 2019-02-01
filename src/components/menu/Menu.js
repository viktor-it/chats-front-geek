import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {getUsers, addContact} from '../../store/actions';

import Modal from  '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';

import MenuList from  './MenuList';
import SearchList from  '../../containers/sidebar/SearchList';
import User from  '../profiles/User';


class Menu extends Component {

		state = {
			menu: false,
			modal: null,

			addItem: '',
			active: 0,
			
			user: null
		}
	    static getDerivedStateFromProps(nextProps, prevState) {
	        if (nextProps.user !== prevState.user) {
	            return {
	                user: nextProps.user,
	            }
	        }
	        //если состояние не изменилось
	        return null;
	    }

		menuShow = () => {
			this.setState({
      			menu: !this.state.menu
    		});
    	}
    	searchShow = () => {
		    this.setState({
		    	modal: 1,
    		});		    
		}
  
		searchHide = () => {
			this.setState({modal: 0});

			//обнуление input при выходе из окна поиска
			document.getElementById('Search').value = '';
		}

		//поиск при нажатии 'Enter'
		enterSearch = (event) => {
			if (event.key === 'Enter') {
				this.props.dispatch(getUsers(event.target.value));
		    }
		}
		//поиск при клике по лупе
		clickSearch = () => {
			let value = document.getElementById('Search').value;
			this.props.dispatch(getUsers(value));
		}

		openProfile = (data) => {
			this.setState({
		    	modal: 2,
		    	user: data
    		});	   		
		}		
		
		updateData = (id, name) => {
			//добавляем имя для последующего добавления в общий список;
			this.setState({ addItem: name });
			//id для выделения цветом при клике
			this.setState({active: id});
		}

		//добавление контакта в общий список
		addContact = () => {
			this.props.dispatch(addContact(this.state.addItem));
		}



		switchComponent() { 
			switch(this.state.modal) {
				//выход
            	case 0:
                	return null;
                break;

                //окно поиска контакта
            	case 1:
            		//для заглушки =>
	            		//проверка на наличие пользователя в списке контактов
	            		//нет - добавляем в список
	            		// let foundUsers = [];
					     //for (let i = 0, max = this.props.users.length; i < max; i++) {
					     // let usersId = this.props.users[i].id;
					     // let foundId = this.props.contacts.find(el => {return el.id === usersId});
						// 	if (typeof foundId == 'undefined'){
						// 		foundUsers.push(this.props.users[i]);
						// 	}						
						// }
						// let foundUsers = this.props.users;

					     //let users = foundUsers.map((user, index) => {
						    // return <SearchList 
								  //  updateData = {this.updateData}
								  //  openProfile = {this.openProfile}
								  //  key = {index} {...user}
								  //  active = {this.state.active}/>
						    //});

	                return (
	                	<Modal classesNames = 'SearchContacts'>
	                		<div className = {styles.List}>	
								{/*{users}*/}
								<SearchList 
			            		updateData = {this.updateData}
			            		openProfile = {this.openProfile}
			            		 
			            		user = {this.state.user}
			            		active = {this.state.active}/>
							</div>

							<div className = {styles.ButtonsBlock}>
								<button onClick = {this.addContact} className = {styles.Button}>
									<div>
				                        <i className = {styles.ButtonIcon + ' fas fa-check'}/>
				                    </div>
				                    <div className = {styles.ButtonText}>
				                        Пригласить
				                    </div>
								</button>
								<button onClick = {this.searchHide} className = {styles.Button}>
									<div>
				                        <i className = {styles.ButtonIcon + ' fas fa-times'}/>
				                    </div>
				                    <div className = {styles.ButtonText}>
				                        Отменить
				                    </div>
								</button>
							</div>

						</Modal>
	                ); 
	            break;

	            //окно профиля
	            case 2:
	                return (
	                	<Modal classesNames = 'SearchContacts'>	
	                		<User user = {this.state.user}
	                			addContact = {this.addContact}
	                			searchShow = {this.searchShow}
	                		/>
						</Modal>
	                ); 
	            break;

	            default:
	                console.log(this.state.active);
	            break;
        	}
    	}

		render() {
			// компоненты главного меню
			let menuItems = [
				{
					href: '/account',
					icon: ' fas fa-user',
					text: 'Личный кабинет',
					action: ''
				},
				{
					href: '/profile',
					icon: ' fas fa-user',
					text: 'Профиль',
					action: ''
				},
				{
					href: '/auth',
					icon: ' fas fa-user-times',
					text: 'Выйти',
					action: 'logout'
				}
			];

			// главное меню
			const menu = this.state.menu ? (
				<>
					<Backdrop show classesNames='MainMenu'/>
			    	<Modal classesNames = 'MainMenu'>	
		            	<MenuList menuShow = {this.menuShow} items = {menuItems}/>		            		
					</Modal>
				</>
			) : null;

	        return (
				<div className = {styles.Menu}>

					{/*иконка меню - гамбургер*/}
			    	<div onClick = {this.menuShow} className = {styles.Burger}>
		    			{/*<span className = {styles.BurgerLine}/>*/}
		    			<i className = {styles.BurgerIcon + ' fas fa-bars'}/>		    		
			    	</div>

			    	{/*поиск контактов*/}
			    	<div className = {styles.Search}>
				    	<input
				    		placeholder = 'Найти...'
				    		type = 'text'
				    		className = {styles.SearchInput}
				    		id = 'Search'
				    		onClick = {this.searchShow}
				    		onKeyPress = {this.enterSearch}
				    	/>
				    	<i className = {styles.SearchIcon + ' fas fa-search'}
				    		onClick = {this.clickSearch}/>
			    	</div>

			   		{/*окно найденных контактов, профиль пользователя*/}
					<>
		                { this.switchComponent() }
		            </>

			    	{/*главное меню*/}
			    	<>
				    	{menu}
					</>

			    </div>
	        );
	    }
}

function mapStateToProps(store) {
    return {
        user: store.users.users,
        contacts: store.contacts.contacts,
		is_loading_users: store.users.is_loading,
    }
}

export default connect(mapStateToProps)(Menu);
