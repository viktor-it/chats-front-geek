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

    switchComponent(param) {
        switch(param) {
            case 1:
                return (
                    <ChatsList chats={this.props.chats}/>
                );
            break;
            case 2:
                return (
                    <CreateGroup/>
                );
            break;
            case 3:
                return (
                    <SearchGroup/>
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

                {/*кнопки*/}
                <button onClick={() => {this.state.active = 2;this.switchComponent(this.state.active)}} >
                        1-st button
                </button>
                <button onClick={() => {this.state.active = 3;this.switchComponent(this.state.active)}} >
                        2-nd button
                </button>
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




