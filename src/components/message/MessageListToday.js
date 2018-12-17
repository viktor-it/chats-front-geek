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
              <SingleMessage messages={this.props.messages} />
          </div>
      );
  }
}