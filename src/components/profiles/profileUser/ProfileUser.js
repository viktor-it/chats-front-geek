import React, { Component } from "react";
import ProfileUserTop from "./ProfileUserTop";
import {Link} from "react-router-dom";
import ProfileClose from "./ProfileClose";
import Sidebar from "../../../layouts/Sidebar";

class ProfileUser extends Component {
    render() {
        let about = 'информация о себе';
        if (props.about) {
            about = props.about;
        }
        return(
            <div>
                <Sidebar/>
                <ProfileUserTop/>
                <p>{props.about.mail}</p>
                <h4>{props.about.name}</h4>
                <div className="profile__about">
                    <h5>О себе:</h5>
                    <div className="profile__about_info">
                        <p>{props.about}</p>
                        <ul>
                            <li><a href="#">Написать сообщение</a></li>
                        </ul>
                        <p>Оповещения <input type="checkbox"/></p>
                        <ul>
                            <li><Link to="/">Выйти из профиля</Link></li>
                            <li><Link to="/">Очистить переписку</Link></li>
                            <li><Link to="/">Удалить пользователя</Link></li>
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
export default ProfileUser;