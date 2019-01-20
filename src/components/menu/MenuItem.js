import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {logoutUser} from '../../store/actions';
import { connect } from 'react-redux';

import GroupProfile from '../profiles/GroupProfile';
import ProfileUser from '../profiles/profileUser/ProfileUser';
import Modal from  '../UI/Modal/Modal';

import styles from './MenuItem.module.css';

class MenuItem extends Component {
	state = {
        modal: false
    }

    closeProfile = () => {
        this.setState({
            modal: false
        });         
    }
	
	switchAction = (action) => {
		switch(action) {
			//выход из аккаунта (в главном меню)
        	case 'logout':
            	this.props.dispatch(logoutUser());
            break;
            //открыть профиль контакта/группы
            case 'openProfile':
            	this.setState({
            		modal: !this.state.modal
        		});
            break;
            default:
	            console.log(this.props);
	        break;		
		}
	}

	render(){
		let profile = (this.props.active === 1) ? 
			<GroupProfile profile = {this.props.data} closeProfile = {this.closeProfile}/>
			: 
			<ProfileUser profile = {this.props.data} closeProfile = {this.closeProfile}/>


		let modal = this.state.modal ? (
            <>
                <Modal classesNames = 'SearchContacts GroupProfile'>   
                    {profile}
                </Modal>
            </>
        ) : null;

		return(
			<>
		        <Link to = {this.props.href} className = {styles.Item} onClick = {() => {this.switchAction(this.props.action)}}>
					<i className = {styles.Icon + this.props.icon}/>
					<p className = {styles.Text}>{this.props.text}</p>
		        </Link>
		        {modal}	
	        </>        
		)
	}
}

const mapStateToProps = (store) => {
  return {
      active: store.messages.active
  }
}

export default connect(mapStateToProps)(MenuItem);

