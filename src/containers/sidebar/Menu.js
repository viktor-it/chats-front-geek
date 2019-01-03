import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from  './Menu.module.css';
import {logoutUser, getUsers, addContact} from '../../store/actions';

import Modal from  '../../components/UI/Modal/Modal';

import SearchList from  './SearchList';
import User from  '../../components/sidebar/User';


class Menu extends Component {

		state = {
			condition: false,
			modal: null,

			items: [],
			addItem: '',
			active: 0,
			
			user: {}
		}

		handleClick = () => {
			this.setState({
      			condition: !this.state.condition
    		});
    	}
    	searchShow = () => {
		    this.setState({
		    	modal: 1,
		    	items: this.props.users
    		});		    
		}
  
		searchHide = () => {
			this.setState({modal: 0});
		}

		searchResult = (event) => {
			if (event.key === 'Enter') {

				// фильтр-поиск
    			let updatedList = this.state.items.filter(function(item){
      				return item.name == event.target.value;
    			});

    			this.setState({items: updatedList});
		    }
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

		componentWillMount() {
			//загрузить всех пользователей
    		this.props.dispatch(getUsers());
		}
		switchComponent() { 
			switch(this.state.modal) {
				//выход
            	case 0:
                	return null;
                break;
                //окно поиска контакта
            	case 1:
            		let users = this.state.items.map((user, index) => {
	            		return <SearchList 
			            		updateData={this.updateData}
			            		openProfile={this.openProfile}
			            		key={index} {...user}
			            		active={this.state.active}/>
	        		})
	                return (
	                	<Modal classesNames='SearchContacts'>			                    
							{users}

							<button onClick={this.addContact}>
								Пригласить
							</button>
							<button onClick={this.searchHide}>
								Отменить
							</button>
						</Modal>

	                ); 
	            break;
	            //окно профиля
	            case 2:
	            	let contact = this.state.items.map((user, index) => {
	            		return <SearchList 
			            		updateData={this.updateData}
			            		openProfile={this.openProfile}
			            		key={index} {...user}
			            		active={this.state.active}/>
	        		})
	                return (
	                	<Modal classesNames='SearchContacts'>	
	                		<User user={this.state.user}/>
						</Modal>
	                ); 
	            break;
	            default:
	                console.log(this.state.active);
	            break;
        	}
    	}

		render() {
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

					<>
		                { this.switchComponent() }
		            </>

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
