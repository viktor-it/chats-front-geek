import React, { Component } from "react";

export default class ProfileUser extends Component {

    render() {
        let about = 'информация о себе';
        if (props.about) {
            about = props.about;
        }
        return(
            <div className="profile">
                <div className="profile__top">
                    <img src="" alt="user_foto"/>
                    <h4>Мой профиль</h4>
                </div>
                <div className="profile__info">
                    <p>{props.about.email}</p>
                    <h3>{props.about.name}</h3>
                    <button>Кнопка редактирования информации</button>
                    <span>Данная информация будет видна всем пользователям в Pocket Messenger</span>
                </div>
                <div className="profile__about">
                    <h5>О себе:</h5>
                    <button>Кнопка редактирования информации</button>
                    <div className="profile__about_info">
                        <p>{props.about.info}</p>
                        <ul>
                            <li><a href="#">Написать сообщение</a></li>
                            <li><a href="#">Личный кабинет</a></li>
                        </ul>
                        <input type="checkbox"/>
                        <ul>
                            <li><a href="#">Выйти из профиля</a></li>
                            <li><a href="#">Очистить переписку</a></li>
                            <li><a href="#">Удалить профиль</a></li>
                        </ul>
                    </div>
                </div>
                <div className="profile__btn-close">
                    <button>Кнопка закрытия окна профиля</button>
                </div>
            </div>
        )
    }
}