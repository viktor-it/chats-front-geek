
import React from 'react';

import ContactsList from './ContactsList';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import ContactSearch from '../contact/Search/ContactSearch';

import {getContacts, getContactsById} from '../../../store/actions';

import {connect} from 'react-redux';

class Contacts extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getContacts());
        this.props.dispatch(getContactsById());

        // this.props.dispatch(getContacts(localStorage.getItem('token')));
	}

	render() {
		if(this.props.is_loading_contacts){
            return <Spinner />
        }
        
        return (
            <ContactsList contacts={this.props.contacts}/>,
            <ContactsList contacts={this.props.id}/>
        );

    }
}

function mapStateToProps(store) {
    return {
        contacts: store.contacts.contacts,
        id: store.contacts.id,
		is_loading_contacts: store.contacts.is_loading,
    }
}


export default connect(mapStateToProps)(Contacts);





