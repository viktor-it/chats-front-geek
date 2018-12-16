import React, { Component } from "react";
import ProfileUserFoto from "./ProfileUserFoto";

class ProfileUserTop extends Component {
    render() {
        let about = "информация о себе";
        if (props.about) {
            about = props.about;
        }
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
export default ProfileUserTop;