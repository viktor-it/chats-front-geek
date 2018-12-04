import React, { Component } from "react";
import ProfileUserTop from "./ProfileUserTop";
import Link from "react-router-dom/es/Link";
import ProfileClose from "./ProfileClose";

export default class ProfileUser extends Component {
    render() {
        let about = 'информация о себе';
        if (props.about) {
            about = props.about;
        }
        return(
            <div>
                <ProfileUserTop/>
                <div className="profile__about">
                    <h5>О себе:</h5>
                    <div className="profile__about_info">
                        <p>{props.about.info}</p>
                        <ul>
                            <li><a href="#">Написать сообщение</a></li>
                        </ul>
                        <input type="checkbox"/>
                        <ul>
                            <li><Link to="/">Выйти из профиля</Link></li>
                            <li><Link to="/">Очистить переписку</Link></li>
                            <li><Link to="/">Удалить профиль</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="profile__btn-close">
                   <ProfileClose/>
                </div>
            </div>
        )
    }
}