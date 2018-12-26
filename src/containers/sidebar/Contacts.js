import React from 'react';

import ContactsList from '../../components/sidebar/contacts/ContactsList';
import Spinner from '../../components/UI/Spinner/Spinner';
// import ContactSearch from '../contact/Search/ContactSearch';

import {getContacts} from '../../store/actions';

import {connect} from 'react-redux';

class Contacts extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getContacts());
        // this.props.dispatch(getContacts(localStorage.getItem('token')));
	}
    // state = {
    //     active: 1
    // };

	render() {
		if(this.props.is_loading_contacts){
            return <Spinner />
        }
        
        // switch(this.state.active) {
        //     case 1:
                return (
                    <ContactsList contacts={this.props.contacts}/>
                );
        //     case 2:
        //         return (
        //             <ContactSearch
        //             closeForm={() => {this.setState({active: 1})}}/>
        //         ); 
        //     default:
        //         console.log(this.state.active);
        //     break;
        // }
        // изменилась логика - поиск через input в шапке, вывод найденных пользователей
        // в модальное окно
    }
}

function mapStateToProps(store) {
    return {
        contacts: store.contacts.contacts,
		is_loading_contacts: store.contacts.is_loading,
    }
}


export default connect(mapStateToProps)(Contacts);





