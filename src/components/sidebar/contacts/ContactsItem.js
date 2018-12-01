import React from 'react';
import {NavLink} from 'react-router-dom';


const ContactsItem = (props) => {
    // let Mark;
    // if (props.mark.delivered = true){

    // }
    return (
        <div className="contacts__block" style={{width:'100px',height:'100px',backgroundColor:'blue'}}>
            <NavLink className="contacts__item" to={`/contacts/${props.id}`}>
                <div className="contacts__img">
                    <div style={{backgroundImage: `url(${props.img})`, height:'60px', width:'60px'}} />
                </div>
                <div className="contacts__name">
                    {props.name}
                </div>
                <div className="contacts__text">
                    {props.text}
                </div>
                <div className="contacts__time">
                    {props.time}
                </div>
                <div className="contacts__mark">
                    {/*props.mark*/}
                </div>                
            </NavLink>
        </div>
    );
}

export default ContactsItem