import React, { Component } from "react";
import ProfileUserTop from "../profileUser/ProfileUserTop";
import {Link} from "react-router-dom";
import ProfileClose from "../profileUser/ProfileClose";
import Sidebar from "../../../layouts/Sidebar";

class Profile extends Component {
    render()
    {
        return (
            <div>
                <Sidebar/>
                <ProfileUserTop/> <button>Редактировать фото</button>
                <p>{props.about.mail}</p>
                <h4>{props.about.name}</h4>
                <div className="profile__about">
                    <h5>О себе:</h5> <button>Редактировать информацию</button>
                    <div className="profile__about_info">
                        <p>{props.about}</p>
                        <ul>
                            <li><a href="#">Написать сообщение</a></li>
                        </ul>
                        <Link to="/">Личный кабинет</Link>
                        <p>Оповещения <input type="checkbox"/></p>
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
export default Profile;