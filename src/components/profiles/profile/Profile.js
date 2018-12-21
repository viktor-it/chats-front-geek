import React, {Component} from "react";
import ProfileUserTop from "../profileUser/ProfileUserTop";
import ProfileClose from "../profileUser/ProfileClose";
import styles from "./Profile.module.css";


class Profile extends Component {
    render() {
        return (
            <section className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles['header__pic']}>
                    <ProfileUserTop/>
                    <button className={styles['change-btn']}>
                        <img src={require('../../../images/personal_profile/photo-camera.svg')} alt="#"
                             className={styles['change-btn__icon']}/>
                    </button>
                    </div>
                    <span className={styles['header__text']}>Мой Профиль</span>
                </div>
                    <div className={styles['profile-info']}>
                        <span className={styles['profile-info__mail']}>simsim28@gmail.com</span>
                        <div className={styles['profile-info__name']}>
                            <h1 className={styles["profile-name"]}>Вася Васильков</h1>
                            <button className={styles.edit}>
                                <img src={require("../../../images/personal_profile/pencil.svg")} alt="#" className={styles['edit__icon']}/>
                            </button>
                        </div>
                    </div>

                    <div className={styles.status}>
                        <span className={styles["status__info"]}>Данная информация будет доступна всем пользователям в Pocket Messengeer.</span>
                        <div className={styles["status__about"]}>
                            <label htmlFor="about" className={styles["status__about-add"]}>О себе: </label>
                            <input type="text" className={styles["status__about-text"]} id="about"/>
                            <button className={styles.edit}>
                                <img src={require("../../../images/personal_profile/pencil.svg")} alt="#" className={styles["edit__icon"]}/>
                            </button>
                        </div>
                        <p className={styles["status__text"]}>Web-дизайнер, разработчик мобильных приложений, студент
                            GB.</p>
                    </div>
                    <div className={styles["profile__about"]}>
                        <ul className={styles["profile-menu"]}>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/vector.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Написать сообщение
                                </button>

                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/enter.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Личный кабинет
                                </button>
                            </li>
                            <li className={styles["profile-menu__items profile-menu__items_toggle"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/bell.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Оповещения
                                </button>

                                <div className={styles["toggle-switch"]}>
                                    <input type="checkbox" className={styles.switch} id="switch"/>
                                    <label htmlFor="switch" className={styles["switch__line"]}/>
                                </div>
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/exit.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Выйти из профиля
                                </button>
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/clear.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Очистить переписку
                                </button>
                            </li>
                            <li className={styles["profile-menu__items"]}>
                                <button className={styles["item-btn"]}>
                                    <img src={require("../../../images/personal_profile/delete.svg")} alt="#"
                                         className={styles["profile-menu__icon"]}/>
                                    Удалить профиль
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ProfileClose/>
            </section>
        )
    }
}

export default Profile;