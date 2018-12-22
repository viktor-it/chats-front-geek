import React from 'react'

import { Link } from 'react-router-dom'

import ChatsAPI from '../../../store/reducers/chatsStub'

import styles from './GroupProfile.module.css';


const GroupProfile = (props) => {
	const chat = ChatsAPI.get(
		parseInt(props.match.params.id, 10)
	)
	return (
		<div className={styles.Profile}>

			<div className={styles.Header}>
				<div>
                    <img src={require('../../../images/Group_profile/team.svg')}
					alt="photo" className={styles.HeaderAvatar} />
				</div>

				<p className={styles.HeaderText}>
					Групповой профиль
				</p>

				<div className={styles.GroupInfoName}>
	            	<h2 className={styles.GroupName}>
	            		{chat.title}
	            	</h2>

	            	<button className={styles.Edit}>
						<div className={styles.EditIcon}> </div>
            		</button>
            	</div>
            </div>

		    <div className={styles.Status}>
		        <span className={styles.StatusInfo}>
		        	Данное название будут видеть Ваши контакты в Pocket Messengeer.
		        </span>

		        <div className={styles.StatusAbout}>
		            <label for="about" className={styles.StatusAboutAdd}>Описание: </label>
		            <input type="text" className={styles.StatusAboutText} id="about"/>
		            <button className={styles.Edit}>
                        <div className={styles.EditIcon}> </div>
					</button>
		        </div>

		        <p className={styles.StatusText}>
		        	Команда разработчиков десктоп - версии мессенджера "Pocket Messenger"
		        </p>
		    </div>

			<ul className={styles.GroupMenu}>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn}>
                            <div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconMembers}> </div>
			                Участники
			            </button>
			        </Link>
		        </li>
		        <li className={styles.GroupMenuItems+' '+styles.GroupMenuItemsNotification}>
		            <button className={styles.ItemBtn}>
                        <div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconBell}> </div>
		                Оповещения
		            </button>
		             <div className={styles.ToggleSwitch}>
		                <input type="checkbox" className={styles.Switch} id="switch"/>
		                <label for="switch" className={styles.SwitchLine}> </label>
		            </div>
		        </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn}>
							<div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconClear}> </div>
			                Очистить переписку
			            </button>
			        </Link>
		        </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn}>
                            <div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconAdd}> </div>
			                Добавить пользователя
			            </button>
			        </Link>
		        </li>
                <li className={styles.GroupMenuItems}>
                    <Link to="/">
                        <button className={styles.ItemBtn}>
                            <div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconExit}> </div>
                            Выйти из группы
                        </button>
                    </Link>
                </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn+" "+styles.ItemBtnRed}>
                            <div className={styles.GroupMenuIcon + " " + styles.GroupMenuIconRed}> </div>
			                Удалить пользователя
			            </button>
			        </Link>
		        </li>
		    </ul>

		    <div className={styles.CloseProfile}>
			    <Link to="/chats">
			        <button className={styles.CloseBtn}>
                        {/*<div className={styles.CloseBtnIcon}> </div>*/}
						Закрыть
			        </button>
			    </Link>
		    </div>

        </div>
	)
}

export default GroupProfile


