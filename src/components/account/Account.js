import React from 'react'

import styles from  './Account.module.css';

const Account = () => (
	<div>
		<div className={styles.Header}>
			<h2 className={styles.Title}> Личный кабинет </h2>
			<i className={styles.MenuBtn + ' fas fa-ellipsis-v'} />
		</div>
		<div className={styles.Main}>
			<div className={styles.Subtitle}>
				<span className={styles.Text}>Мои задания</span>
				<i className={styles.Btn + ' fas fa-caret-right'} />
			</div>
			<div className={styles.Subtitle}>
				<span className={styles.Text}>Мое портфолио</span>
				<i className={styles.Btn + ' fas fa-caret-right'} />
			</div>
			<div className={styles.Subtitle}>
				<span className={styles.Text}>Мои настройки</span>
				<i className={styles.Btn + ' fas fa-caret-right'} />
			</div>
		</div>
	</div>
)

export default Account
