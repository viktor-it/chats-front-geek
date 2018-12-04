import React, { Component } from "react";
import ProfileUserFoto from "./ProfileUserFoto";

export default class ProfileUserTop extends Component {
    render() {
        return(
            <div className="profile">
                <div className="profile__top">
                    <ProfileUserFoto logoUser={"#"}/>
                    <h4>Мой профиль</h4>
                </div>
                <div className="profile__info">
                    <p>{props.about.email}</p>
                    <h3>{props.about.name}</h3>
                </div>
            </div>
        );
    }
}