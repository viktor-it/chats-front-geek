import React from "react";
import {NavLink} from 'react-router-dom';

import styles from "./ProfileUser.module.css";

const ProfileClose = () => {
    return (
        <div className = {styles["close-profile"]}>
        	<NavLink to = {'/chats'}>
    			<button className = {styles.Button}>        			
    				<i className = {styles.ButtonIcon + ' fas fa-times'}/>
    				<p className = {styles.ButtonText}>Закрыть</p>
    			</button>
    		</NavLink>
        </div>
    )
}

export default ProfileClose