import React, { Component } from 'react';

import styles from  './SearchList.module.css';


class SearchList extends Component {

	componentWillMount(){
		this.clickTimeout = null
	}

	handleClicks = () => {
		//двойной клик
		if (this.clickTimeout !== null) { 
			this.props.openProfile(this.props.user); 

			clearTimeout(this.clickTimeout);
			this.clickTimeout = null;
		} else {
		//одиночный клик
			this.props.updateData(this.props.user.id, this.props.user.name);  
			this.clickTimeout = setTimeout(() => {
				clearTimeout(this.clickTimeout)
				this.clickTimeout = null
				}, 2000)
		}
	}

	render(){
	    return (
			<div 
				// className = {(this.props.user.active === this.props.user.id) ? 
    //             			styles.Item + ' ' + styles.ActiveItem : 
    //             			styles.Item}
                classNme = {styles.Item}
                onClick = {this.handleClicks}
			>
				{/*<img src = {this.props.user.img} 
	                        alt = 'user'
	                        className = {styles.Avatar}
	            />*/}
	            <div className = {styles.Name}>
					{this.props.user.name}
				</div>
				<div className = {styles.Email}>
					{/*{this.props.user.email}*/}
				</div>
			</div>
	    );
	}
}

export default SearchList;