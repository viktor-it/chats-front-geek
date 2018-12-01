import React from 'react';

import classes from './GroupItem.module.css';

const groupItem = (props) => {
    return (
        <li className={classes.groupItem} onClick={() => props.clicked(props.id)}>
            {props.name}
        </li>
    );
}

export default groupItem;