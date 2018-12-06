import React from 'react';
import classes from './Message.module.css';

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
                  <div className={classes.superBlock}>
                    <img className={classes.miniFoto} src="./img/woman-4.png" />
                    <div className={classes.block}>
                      <div className={classes.blockSms}>
                        <div className={classes.name}>
                          {message.senderId}
                        </div>
                        <div>
                          {message.text}
                        </div>
                      </div>
                      <div className={classes.time}>
                        {outputTime.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                   
                </li>
                )
              })}
          </div>
      );
  }
}