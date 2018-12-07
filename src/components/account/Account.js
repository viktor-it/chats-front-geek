import React from 'react'

import styles from  './Account.module.css';

const Account = () => (
	<div>
		<div className={styles.Header}>
			<h2 className={styles.Title}> Личный кабинет </h2>
		</div>
		<div>
			Мои задания
		</div>
		<div>
			Мое портфолио
		</div>
		<div>
			Мои настройки
		</div>
		<br/>
		<br/>
		<div>
			Привязанные аккаунты
		</div>
	</div>
)

export default Account