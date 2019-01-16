import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {getUsers, addContact} from '../../store/actions';

import Modal from  '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

import SearchList from  './SearchList';
import MenuList from  './MenuList';
import User from  '../../components/profiles/User';


class Menu extends Component {

		state = {
			menu: false,
			modal: null,

			addItem: '',
			active: 0,
			
			user: {}
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
            		//проверка на наличие пользователя в списке контактов
            		//нет - добавляем в список
            		let foundUsers = [];
            		for (let i = 0, max = this.props.users.length; i < max; i++) {
            			let usersId = this.props.users[i].id;
            			let foundId = this.props.contacts.find(el => {return el.id === usersId});
						if (typeof foundId == 'undefined'){
							foundUsers.push(this.props.users[i]);
						}						
					}

            		let users = foundUsers.map((user, index) => {
	            		return <SearchList 
			            		updateData = {this.updateData}
			            		openProfile = {this.openProfile}
			            		key = {index} {...user}
			            		active = {this.state.active}/>
	        		});

	                return (
	                	<Modal classesNames = 'SearchContacts'>
	                		<div className = {styles.List}>	

								{users}

							</div>

							<div className = {styles.ButtonsBlock}>
								<button onClick = {this.addContact}
										className = {styles.Button}>
									<div>
				                        <i className = {styles.ButtonIcon + ' fas fa-check'}></i>
				                    </div>
				                    <div className = {styles.ButtonText}>
				                        Пригласить
				                    </div>
								</button>
								<button onClick = {this.searchHide}
										className = {styles.Button}>
									<div>
				                        <i className = {styles.ButtonIcon + ' fas fa-times'}></i>
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
			// главное меню
			const menu = this.state.menu ? (
				<>
					<Backdrop show classesNames='MainMenu'/>
			    	<Modal classesNames = 'MainMenu'>	
		            	<MenuList menuShow = {this.menuShow}/>
					</Modal>
				</>
			) : null;

	        return (
				<div className = {styles.Menu}>

					{/*иконка меню - гамбургер*/}
			    	<div onClick = {this.menuShow} className = {styles.Burger}>
		    			<span className = {styles.BurgerLine}/>		    		
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

			    	{/*список компонентов меню*/}
			    	<>
				    	{menu}
					</>

			    </div>
	        );
	    }
}

function mapStateToProps(store) {
    return {
        users: store.users.users,
        contacts: store.contacts.contacts,
		is_loading_users: store.users.is_loading,
    }
}

export default connect(mapStateToProps)(Menu);
