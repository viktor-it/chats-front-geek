import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {getUsers, addContact, getBlackList, delFromBlackList} from '../../store/actions';

import Modal from  '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';

import MenuList from  './MenuList';
import SearchList from  '../../containers/sidebar/SearchList';
import User from  '../profiles/User';
import UsersList from  '../usersList/UsersList';


class Menu extends Component {

		state = {
			menu: false,
			modal: null,
			blackList: false,
			blacklistItems: [],

			//addItem: '',
			active: 0,
			
			userslist: false, //для обнуления списка при закрытии окна поиска
			user: null
		}
	    static getDerivedStateFromProps(nextProps, prevState) {
	        if (nextProps.user !== prevState.user || nextProps.blacklist !== prevState.blacklistItems) {
	            return {
	                user: nextProps.user,
	                blacklistItems: nextProps.blacklist
	            }
	        }
	        //если состояние не изменилось
	        return null;
	    }

		menuToggle = () => {
			this.setState({
      			menu: !this.state.menu
    		});
    	}
    	searchShow = () => {
		    this.setState({
		    	modal: 1
    		});		    
		}
  
		searchHide = () => {
			this.setState({
				userslist: false, //для обнуления списка
				modal: 0
			});
			//обнуление input при выходе из окна поиска
			document.getElementById('Search').value = '';
		}

		//поиск при нажатии 'Enter'
		enterSearch = (event) => {
			this.setState({userslist: true});
			if (event.key === 'Enter') { 
				this.props.dispatch(getUsers(event.target.value));
		    }
		}
		//поиск при клике по лупе
		clickSearch = () => {
			this.setState({userslist: true});
			let value = document.getElementById('Search').value;
			this.props.dispatch(getUsers(value));	
		}

		openProfile = (data) => {
			this.setState({
		    	modal: 2,
		    	user: data
    		});	   		
		}		
		
		updateData = (id) => {
			// //добавляем имя для последующего добавления в общий список;
			// this.setState({ addItem: name });//для заглушки

			//id для последующего добавления
			this.setState({active: id});
		}

		//добавление контакта в общий список
		addContact = () => {
			this.props.dispatch(addContact(this.state.active));
		}

		//черный список 
		usersListToggle = () => {
			if (this.state.blackList === false){
				this.props.dispatch(getBlackList());
			}
			this.setState({
      			blackList: !this.state.blackList
    		});
		}
		delFromBlackList = (id) => {
			this.props.dispatch(delFromBlackList(id));
		}

		switchComponent() { 
			switch(this.state.modal) {
				//выход
            	case 0:
                	return null;
                break;

                //окно поиска контакта
            	case 1:
					let user = (this.state.user.id !== undefined && this.state.userslist) ? (
						<SearchList 
		            		updateData = {this.updateData}
		            		openProfile = {this.openProfile}
		            		 
		            		user = {this.state.user}
		            		userEmail = {this.props.userEmail}
		            		active = {this.state.active}/>
					) : null;

	                return (
	                	<Modal classesNames = 'SearchContacts'>
	                		<div className = {styles.List}>	
								{user}
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
				},
				{
					href: null,
					icon: ' fas fa-user-slash',
					text: 'Черный список',
					action: 'usersListToggle'
				}
			];

			// главное меню
			const menu = this.state.menu ? (
				<>
					<Backdrop show classesNames='MainMenu'/>
			    	<Modal classesNames = 'MainMenu'>	
		            	<MenuList menuToggle = {this.menuToggle} items = {menuItems}
		            		usersListToggle = {this.usersListToggle}/>		            		
					</Modal>
				</>
			) : null;

			// черный список
			const blacklist = this.state.blackList ? (
				<>
			    	<Modal classesNames = 'UsersList'>	
		            	<UsersList usersListToggle = {this.usersListToggle}
		            				delFromBlackList = {this.delFromBlackList}
		            				title = 'Чёрный список'
		            				items = {this.state.blacklistItems}/>	            		
					</Modal>
				</>
			) : null;

	        return (
				<div className = {styles.Menu}>

					{/*иконка меню - гамбургер*/}
			    	<div onClick = {this.menuToggle} className = {styles.Burger}>
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

					{/*черный список*/}
			    	<>
				    	{blacklist}
					</>

			    </div>
	        );
	    }
}

function mapStateToProps(store) {
    return {
        user: store.users.users,
        userEmail: store.users.userEmail,
        blacklist: store.contacts.blacklist,
		is_loading_users: store.users.is_loading,
    }
}

export default connect(mapStateToProps)(Menu);
