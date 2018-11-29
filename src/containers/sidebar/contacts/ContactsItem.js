import React from 'react';
import {NavLink} from 'react-router-dom';


class ContactsItem extends React.Component {
    render(){
        return (
            <div className="contacts__block" style={{width:'100px',height:'100px',backgroundColor:'blue'}}>
                <NavLink className="contacts__item" to={`/contacts/${this.props.id}`}>
                    <div className="contacts__img">
                        <div style={{backgroundImage: `url(${this.props.img})`, height:'60px', width:'60px'}} />
                    </div>
                    <div className="contacts__name">
                        {this.props.name}
                    </div>
                    <div className="contacts__text">
                        {this.props.text}
                    </div>
                    <div className="contacts__time">
                        {this.props.time}
                    </div>
                    <div className="contacts__mark">
                        {this.props.mark}
                    </div>                
                </NavLink>
            </div>
        );
    }
}

export default ContactsItem