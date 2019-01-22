import React from 'react';

import ChatsItem from './ChatsItem';
import GroupProfile from '../../../components/profiles/GroupProfile';
import Modal from  '../../../components/UI/Modal/Modal';


import styles from './ChatsList.module.css';

class ChatsList extends React.Component {
    state = {
        modal: false,
        profile: {}
    }

    profileToggle = (data) => {
        this.setState({
            modal: !this.state.modal,
            profile: data
        });         
    }

    render(){
        if(!this.props.chats.length){
            return null; //Если данные еще загружаются
        }

        let profile = this.state.modal ? (
            <>
                <Modal classesNames = 'Profile'>   
                    <GroupProfile id='Profile' profile = {this.state.profile} profileToggle = {this.profileToggle}/>
                </Modal>
            </>
        ) : null;

        let chats = this.props.chats.map((chat, index) => {
            return <ChatsItem key = {index} profileToggle = {this.profileToggle} {...chat}/>
        });

        return (
            <>
                <div className = {styles.List}>
                    { chats }
                </div>

                <>
                    {profile}
                </>

                <div className = {styles.ButtonsBlock}>
                    <button className = {styles.Button} onClick = {this.props.createGroup} >
                        <div>
                            <i className = {styles.ButtonIcon + ' fas fa-check'}></i>
                        </div>
                        <span className = {styles.ButtonText}>Создать группу</span>
                    </button>
                    {/* <button onClick = {() => {this.state.active = 3;this.switchComponent(this.state.active)}} > */}
                    {/*<button className = {styles.Button} onClick = {this.props.searchGroup} >
                        <div className = {styles.Icon}>+</div>
                        <span className = {styles.Text}> Добавить группу</span>                      
                    </button>*/}
                </div>
            </>
        );
    }
}

export default ChatsList