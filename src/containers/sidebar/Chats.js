import React from 'react';

import ChatsList from '../../components/sidebar/chats/ChatsList';
import CreateGroup from '../group/Create/CreateGroup';
import SearchGroup from '../group/Search/SearchGroup';

import Spinner from '../../components/UI/Spinner/Spinner';

import {getChats} from '../../store/actions';

import {connect} from 'react-redux';



class Chats extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getChats());
	}

    state = {
        active: 1
    };

    shouldComponentUpdate() {
        return true;
    }

    switchComponent = (param) => {
        switch(param) {
            case 1:
                return (
                    <ChatsList chats={this.props.chats} createGroup={() => {this.setState({active: 2})}} searchGroup={() => {this.setState({active: 3})}}/>
                );
            break;
            case 2:
                return (
                    <CreateGroup closeForm={() => {this.setState({active: 1})}}/>
                );
            break;
            case 3:
                return (
                    <SearchGroup closeForm={() => {this.setState({active: 1})}}/>
                );
            break;
        }
    }

    
	render() {
		if(this.props.is_loading){
            return <Spinner />
        }
        return (
            <div>
                { this.switchComponent(this.state.active) }
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




