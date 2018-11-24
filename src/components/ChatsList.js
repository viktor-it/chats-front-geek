import React from 'react'
import { Link } from 'react-router-dom'

export default class ChatsList extends React.Component {
	render() {
        return (
        	<div className={this.props.active ? 'active' : ''}>
				<Link to={this.props.href}>Чаты</Link>
			</div>
        );
    }
}




