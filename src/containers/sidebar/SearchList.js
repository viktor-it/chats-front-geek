import React, { Component } from 'react';

import styles from  './SearchList.module.css';


class SearchList extends Component {

	componentWillMount(props){
		this.clickTimeout = null
	}

	handleClicks = () => {
		//двойной клик
		if (this.clickTimeout !== null) {
			//this.props.openProfile(this.props.img, this.props.name, this.props.email, this.props.info); 
			this.props.openProfile(this.props); 

			clearTimeout(this.clickTimeout);
			this.clickTimeout = null;
		} else {
		//одиночный клик
			this.props.updateData(this.props.id, this.props.name);  
			this.clickTimeout = setTimeout(() => {
				clearTimeout(this.clickTimeout)
				this.clickTimeout = null
			}, 2000)
		}
	}

	render(){
	    return (
			<div 
				className = {(this.props.active == this.props.id) ? 
                styles.ListItemActive : styles.ListItem}
                onClick = {this.handleClicks}
			>
					{this.props.name}
			</div>
	    );
	}
}

export default SearchList;