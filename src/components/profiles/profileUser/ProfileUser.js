import React, { Component } from "react";

import ProfileUserTop from "./ProfileUserTop";
import ProfileClose from "./ProfileClose";

import styles from "./ProfileUser.module.css";


class ProfileUser extends Component {
    render() {
        return(
            <section className={styles.profile}>
            <div className={styles.header}>
                <div className={styles.header__pic}>
                <ProfileUserTop/>
                    <div className={styles["status-color"]}>

                    </div>
                </div>
                <p className={styles.header__text}>Профиль</p>
                <p className={styles.header__mail}>{this.props.profile.email}</p>
            </div>
                <h1 className={styles.name}>{this.props.profile.name}</h1>
                <div className={styles.status}>
                    <div className={styles.status__about}>
                        О себе:
                    </div>
                    <p className={styles.status__text}>Web-дизайнер, разработчик мобильных приложений, студент GB.</p>
                </div>
                <ul className={styles["profile-menu"]}>
                    <li className={styles["profile-menu__items"]}>
                        <button className={styles["item-btn"]}>
                            <img src={require("../../../images/personal_profile/vector.svg")} alt="#" className={styles["profile-menu__icon"]}/>
                                Написать сообщение
                        </button>
                    </li>
                        <li className={styles["profile-menu__items profile-menu__items_toggle"]}>
                            <button className={styles["item-btn"]}>
                                <img src={require("../../../images/personal_profile/bell.svg")} alt="#" className={styles["profile-menu__icon"]}/>
                                    Оповещения
                            </button>
                            <div className={styles["toggle-switch"]}>
                                {/*<input type="checkbox" className={styles.switch} id="switch">
                                    <label for="switch" className={styles.switch__line}>

                                    </label>
                                </input>
                                
                                commented for testing

                                */}
                            </div>
                        </li>
                        <li className={styles["profile-menu__items"]}>
                            <button className={styles["item-btn"]}>
                                <img src={require("../../../images/personal_profile/clear.svg")} alt="#" className={styles["profile-menu__icon"]}/>
                                    Очистить переписку
                            </button>
                        </li>
                        <li className={styles["profile-menu__items"]}>
                            <button className={styles["item-btn"]}>
                                <img src={require("../../../images/personal_profile/delete.svg")} alt="#" className={styles["profile-menu__icon"]}/>
                                    Удалить пользователя
                            </button>
                        </li>
                </ul>
                   <ProfileClose/>
            </section>
        )
    }
}
export default ProfileUser;