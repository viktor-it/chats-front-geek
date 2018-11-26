import React from 'react';

import AuthForm from '../containers/Auth/AuthForm';
import Modal from '../components/UI/Modal/Modal';
import Backdrop from '../components/UI/Backdrop/Backdrop';

const auth = () => {
    return (
        <>
            <Backdrop/>
            <Modal show>
                <AuthForm/>
            </Modal>
        </>
    );
}

export default auth;