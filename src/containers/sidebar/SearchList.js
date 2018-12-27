import React, { Component } from 'react';


class SearchList extends Component {
	// chooseUser = () => {
	// 		this.setState({
 //      			condition: !this.state.condition
 //    		});
 //    }
	render(){
	    return (
	        <ul className="list-group">
				{
					this.props.items.map(el => {
						return(
							<li className="list-group-item"
								data-category={el}
								key={el}
								onClick={() => {this.props.updateData(el)}}
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