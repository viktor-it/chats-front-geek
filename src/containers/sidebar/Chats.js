import React from 'react';

import ChatsList from '../../components/sidebar/chats/ChatsList';

import Spinner from '../../components/UI/Spinner/Spinner';

import {getChats} from '../../store/actions';

import {connect} from 'react-redux';


class Chats extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getChats());
	}
    
	render() {
		if(this.props.is_loading){
            return <Spinner />
        }

        return (
            <div>
                <ChatsList chats={this.props.chats}/>
            </div>

        );
    }
}

function mapStateToProps(store) {
    return {
        chats: store.chats.chats,
        is_loading: store.chats.is_loading,
    }
}


export default connect(mapStateToProps)(Chats);




