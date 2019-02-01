import React from 'react';


import {setActiveChat, getGroupProfile} from '../../../store/actions/index';
import {connect} from 'react-redux';

import ChatsItem from './ChatsItem';
import GroupProfile from '../../../components/profiles/GroupProfile';
import Modal from  '../../../components/UI/Modal/Modal';


import styles from './ChatsList.module.css';

class ChatsList extends React.Component {

    clickTimeout = null;
    click_count = 1;

    state = {
        modal: false,
        id: null
    }

    componentDidUpdate(prevProps, prevState) {  
        if (this.state.id !== prevState.id) {
            this.props.dispatch(getGroupProfile(this.state.id));
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id !== prevState.id) {
            return {
                id: nextProps.id
            }
        }
        //если состояние не изменилось
        return null;
    }


    handleClicks = (id) => {
        if (this.clickTimeout !== null) { 
            this.click_count++;
        } else {
            this.clickTimeout = setTimeout(() => {
                //один клик
                if(this.click_count == 1){
                    this.props.dispatch(setActiveChat(id, 1));  
                //два клика                
                } else if (id === this.state.id){
                    this.setState({modal: true});                   
                }
                this.click_count = 1;
                clearTimeout(this.clickTimeout);
                this.clickTimeout = null
            }, 300)
                       
        }
    }

    profileToggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    render(){

        if(!this.props.chats.length){
            return null; //Если данные еще загружаются
        }

        let profile = this.state.modal ? (
            <>
                <Modal classesNames = 'Profile'>   
                    <GroupProfile id = 'Profile' profile = {this.props.group} 
                                profileToggle = {this.profileToggle}/>
                </Modal>
            </>
        ) : null;

        let chats = this.props.chats.map((chat, index) => {
            return <ChatsItem key = {index} 
                            handleClicks = {this.handleClicks} 
                            {...chat}/>
        });

        return (
            <>
                <div className = {styles.List}>
                    { chats }
                </div>

                <>
                    { profile }
                </>

                <div className = {styles.ButtonsBlock}>
                    <button className = {styles.Button} onClick = {this.props.createGroup} >
                        <div>
                            <i className = {styles.ButtonIcon + ' fas fa-check'}></i>
                        </div>
                        <span className = {styles.ButtonText}>Создать группу</span>
                    </button>
                    {/* <button onClick = {() => {this.state.active = 3; this.switchComponent(this.state.active)}} > */}
                    {/*<button className = {styles.Button} onClick = {this.props.searchGroup} >
                        <div className = {styles.Icon}>+</div>
                        <span className = {styles.Text}> Добавить группу</span>                      
                    </button>*/}
                </div>
            </>
        );
    }
}
function mapStateToProps(store) {
    return {
        chats: store.chats.chats,
        group: store.chats.group,
        id: store.messages.id,
        activeChat: store.messages.active,
        is_loading: store.chats.is_loading
    }
}


export default connect(mapStateToProps)(ChatsList);
