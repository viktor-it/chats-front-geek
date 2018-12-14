import React from 'react'

import { Link } from 'react-router-dom'

import ChatsAPI from '../../../store/reducers/chatsStub'

import styles from './ChatProfile.module.css';


const ChatProfile = (props) => {
	const chat = ChatsAPI.get(
		parseInt(props.match.params.id, 10)
	)
	return (
		<div className={styles.Profile}>

			<div className={styles.Header}>
				<div>
					<img src="../../../images/Group_profile/team.svg"
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
                		<img src="../../../images/personal_profile/pencil.svg"
                		alt="#" className={styles.EditIcon}/>
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
		                <img src="../../../images/personal_profile/pencil.svg"
		                alt="#" className={styles.EditIcon}/>
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
			                <img src="../../../images/Group_profile/member.svg"
			                alt="#" className={styles.GroupMenuIcon}/>
			                Участники
			            </button>
			        </Link>
		        </li>
		        <li className={styles.GroupMenuItems}>
		            <button className={styles.ItemBtn}>
		                <img src="../../../images/personal_profile/bell.svg"
		                alt="#" className={styles.GroupMenuIcon}/>
		                Оповещения
		            </button>
		             <div className={styles.ToggleSwitch}>
		                <input type="checkbox" className={styles.Switch} id="switch"/>
		                <label for="switch" className={styles.SwitchLine}></label>
		            </div>
		        </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn}>
			                <img src="../../../images/personal_profile/clear.svg"
			                alt="#" className={styles.GroupMenuIcon}/>
			                Очистить переписку
			            </button>
			        </Link>
		        </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn}>
			                <img src="../../../images/Group_profile/invite.svg"
			                alt="#" className={styles.GroupMenuIcon}/>
			                Добавить пользователя
			            </button>
			        </Link>
		        </li>
		        <li className={styles.GroupMenuItems}>
			        <Link to="/">
			            <button className={styles.ItemBtn + styles.ItemBtnRed}>
			                <img src="../../../images/Group_profile/del_icon.svg"
			                alt="#" className={styles.GroupMenuIcon + styles.GroupMenuIconRed}/>
			                Удалить пользователя
			            </button>
			        </Link>
		        </li>
		    </ul>

		    <div className={styles.CloseProfile}>
			    <Link to="/chats">
			        <button className={styles.CloseBtn}>
			            <img src="img/personal_profile/cancel.svg"
			            alt="#" className={styles.CloseBtnIcon}/>
			        </button>
			    </Link>
		    </div>

        </div>
	)
}

export default ChatProfile


