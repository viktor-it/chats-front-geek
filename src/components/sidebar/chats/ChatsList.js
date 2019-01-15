import React from 'react';

import ChatsItem from './ChatsItem';
import GroupProfile from './GroupProfile';
import Modal from  '../../UI/Modal/Modal';


import styles from './ChatsList.module.css';

class ChatsList extends React.Component {
    state = {
        modal: false,
        profile: {}
    }

    openProfile = (data) => {
        this.setState({
            modal: true,
            profile: data
        });         
    }

    closeProfile = () => {
        this.setState({
            modal: false
        });         
    }

    render(){
        if(!this.props.chats.length){
            return null; //Если данные еще загружаются
        }

        let profile = this.state.modal ? (
            <>
                <Modal classesNames = 'SearchContacts'>   
                    <GroupProfile profile = {this.state.profile} closeProfile = {this.closeProfile}/>
                </Modal>
            </>
        ) : null;

        let chats = this.props.chats.map((chat, index) => {
            return <ChatsItem key = {index} openProfile = {this.openProfile} {...chat}/>
        });

        return (
            <>
                <div className = {styles.List}>
                    { chats }
                </div>

                <div>
                    {profile}
                </div>

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