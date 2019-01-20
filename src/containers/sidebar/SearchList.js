import React, { Component } from 'react';

import styles from  './SearchList.module.css';


class SearchList extends Component {

	componentWillMount(){
		this.clickTimeout = null
	}

	handleClicks = () => {
		//двойной клик
		if (this.clickTimeout !== null) { 
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
				className = {(this.props.active === this.props.id) ? 
                			styles.Item + ' ' + styles.ActiveItem : 
                			styles.Item}
                onClick = {this.handleClicks}
			>
				<img src = {this.props.img} 
	                        alt = 'user'
	                        className = {styles.Avatar}
	            />
	            <div className = {styles.Name}>
					{this.props.name}
				</div>
				<div className = {styles.Email}>
					{this.props.email}
				</div>
			</div>
	    );
	}
}

export default SearchList;