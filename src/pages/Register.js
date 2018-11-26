import React from 'react';

import RegForm from '../containers/Register/RegForm';
import Modal from '../components/UI/Modal/Modal';
import Backdrop from '../components/UI/Backdrop/Backdrop';

const register = () => {
    return (
        <>
            <Backdrop/>
            <Modal show>
                <div>Форма регистрации</div>
                <RegForm/>
            </Modal>
        </>
    );
}

export default register;