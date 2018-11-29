import React from 'react';

import ContactsList from './ContactsList';
import Spinner from '../../../components/UI/Spinner/Spinner';

import {getContacts} from '../../../store/actions';

import {connect} from 'react-redux';

class Contacts extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getContacts());
	}
	render() {
		if(this.props.is_loading){
            return <Spinner />
        }

        return (
            <div className="wrapper">
                <ContactsList contacts={this.props.contacts}/>
            </div>

        );
    }
}

function mapStateToProps(store) {
    return {
        contacts: store.contacts.contacts,
		is_loading: store.contacts.is_loading,
    }
}


export default connect(mapStateToProps)(Contacts);





