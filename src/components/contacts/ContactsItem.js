import React from 'react';
import {Link} from 'react-router-dom';

export default class ContactsItem extends React.Component
{
    render()
    {   
        return (
            <div className="contacts__block" style={{width:'100px',height:'100px',backgroundColor:'blue'}}>
                <Link className="contacts__item" to={`/contacts/${this.props.id}`}>
                    <div className="contacts__img">
                        img
                    </div>
                    <div className="contacts__name">
                        user's name{/*{this.props.name}*/}
                    </div>
                    <div className="contacts__text">
                        text
                    </div>
                    <div className="contacts__time">
                        time
                    </div>
                    <div className="contacts__mark">
                        mark
                    </div>                
                </Link>
            </div>
        );
    }
}