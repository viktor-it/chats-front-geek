import React from "react";
//import {NavLink} from 'react-router-dom';

import styles from "./ProfileUser.module.css";

const ProfileClose = (props) => {
    return (
        <div className = {styles["close-profile"]}>        	
			<button className = {styles.Button}
                    onClick = {() => {props.profileToggle()}}>        			
				<i className = {styles.ButtonIcon + ' fas fa-times'}/>
				<p className = {styles.ButtonText}>Закрыть</p>
			</button>
        </div>
    )
}

export default ProfileClose