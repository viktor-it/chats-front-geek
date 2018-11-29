import React from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends React.Component
{
    render(){
        return (
	        <li>
		        <NavLink to={this.props.href} activeClassName="active">
					{this.props.children}
		        </NavLink>
	        </li>		        
		)
	}
}

