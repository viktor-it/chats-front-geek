import React from 'react'
import { Link } from 'react-router-dom'

export default class ContactsList extends React.Component {
	render() {
        return (
        	<div className={this.props.active ? 'active' : ''}>
				<Link to={this.props.href}>Контакты</Link>
			</div>
        );
    }
}
