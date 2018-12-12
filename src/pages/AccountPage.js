import React from 'react';

import Sidebar from '../layouts/Sidebar';

import Account from '../components/account/Account';

import styles from './AccountPage.module.css';

const AccountPage = () => {
    return (
        <div className={styles.Main}>
             <Sidebar/>
             <div className={styles.Field}>
             	<Account/>
             </div>  	
        </div>
    );
}

export default AccountPage;