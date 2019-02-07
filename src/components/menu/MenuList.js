import React, { Component } from 'react';

import MenuItem from  './MenuItem';

import styles from './MenuList.module.css';

class MenuList extends Component {

	render() {
		let items = this.props.items.map((item, index) => {
	        return <MenuItem profileToggle = {this.props.profileToggle}
	        				usersListToggle = {this.props.usersListToggle} 
	        				key = {index} {...item} />
	    });

	    return (
	    	<>
	    		{/*кнопка в шапке меню для закрытия*/}
	    		<div className = {styles.Header}
	    			onClick = {() => this.props.menuToggle()}>
		    		<i className = {styles.Button + ' fas fa-angle-left'}/>
		    	</div>
		    	<nav className = {styles.List}>
		    		{items}
		    	</nav>
	        </>
	    );
	}
}


export default MenuList;