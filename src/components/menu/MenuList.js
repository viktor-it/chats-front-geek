import React, { Component } from 'react';

import MenuItem from  './MenuItem';

import styles from './MenuList.module.css';

class MenuList extends Component {


	render() {
		let items = this.props.items.map((item, index) => {
	        return <MenuItem profileToggle = {this.props.profileToggle} 
	        				 key={index} {...item} />
	    });




	    return (
	    	<>
	    		{/*кнопка в шапке меню для закрытия*/}
	    		<div className = {styles.Header}>
		    		<i className = {styles.Button + ' fas fa-angle-left'}
		    			onClick = {this.props.menuToggle}/>
		    	</div>
		    	<nav className = {styles.List}>
		    		{items}
		    	</nav>
	        </>
	    );
	}
}


export default MenuList;