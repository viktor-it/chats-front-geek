import React from 'react';

import MenuItem from  './MenuItem';

import styles from './MenuList.module.css';

const MenuList = (props) => {
	let data = props.data;

	let items = props.items.map((item, index) => {
        return <MenuItem data = {data} key={index} {...item} />
    });




    return (
    	<>
    		{/*кнопка в шапке меню для закрытия*/}
    		<div className = {styles.Header}>
	    		<i className = {styles.Button + ' fas fa-angle-left'}
	    			onClick = {props.menuShow}/>
	    	</div>
	    	<nav className = {styles.List}>
	    		{items}
	    	</nav>
        </>
    );
}


export default MenuList;