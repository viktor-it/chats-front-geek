import React from 'react';
import classes from './Message.module.css';

export default class MessageListToday extends React.Component
{
  render()
  {
      return (
          <div className="list">
              <div className={classes.date}><span>15 сентября</span></div>
              {this.props.messages.map(message => {
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
                                              {/* {message.date} */}14.01
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