import React from 'react';
import classes from './Message.module.css';
import SingleMessage from './SingleMessage';

export default class MessageListToday extends React.Component
{
  render()
  {
    const outputDate = '15 сентября';
      return (
          <div className="list">
              <div className={classes.date}><span>{outputDate}</span></div>
              {this.props.messages.map(message => {
                let outputTime = new Date(message.date);
                return (
                  <li className={classes.item} key={message.id}>
                    <SingleMessage message={message} outputTime={outputTime}/>
                  </li>
                )
             })}
          </div>
      );
  }
}