import React, { Component } from 'react';

import styles from  './SearchList.module.css';


class SearchList extends Component {

	render(){
	    return (
	        <ul className="list-group">
				{
					this.props.items.map(el => {
						return(
							<li className = "ListItem"
								data-category = {el}
								key = {el}
								onClick = {() => {this.props.updateData(el)}}
							>
									{el}
							</li>
						)
					})
				}
	    	</ul>
	    );
	}
}

export default SearchList;