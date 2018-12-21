import React, { Component } from "react";
import styles from "./ProfileUser.module.css";

export default class ProfileClose extends Component {
    render() {
        return (
            <div className={styles["close-profile"]}>
        <button className={styles["close-btn"]}>
            <img src={require("../../../images/personal_profile/cancel.svg")} alt="#" className={styles["close-btn__icon"]}/>
        </button>
            </div>)
    }
}