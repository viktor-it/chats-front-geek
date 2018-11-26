import React from 'react';

import ChatsList from './ChatsList';

import {getChats} from '../../../store/actions/index';

import {connect} from 'react-redux';


class Chats extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getChats());
	}
	render() {
		if(this.props.is_loading){
            return <div>Data's loading...</div>
        }

        return (
            <div className="wrapper">
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




