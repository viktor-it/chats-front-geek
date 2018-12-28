import React, { Component } from 'react';

import styles from  './SearchList.module.css';


class SearchList extends Component {
	render(){
	    return (
			<div 
				className = {(this.props.active == this.props.id) ? 
                styles.ListItemActive : styles.ListItem}
				onClick = {() => {this.props.updateData(this.props.id, this.props.name)}}
			>
					{this.props.name}
			</div>
	    );
	}
}

export default SearchList;