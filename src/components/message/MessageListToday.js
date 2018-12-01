import React from 'react';


export default class MessageListToday extends React.Component
{
  render()
  {
      return (
          <div className="list">
              <h1>List</h1>
              {this.props.messages.map(message => {
                return (
                <li key={message.id}>
                  <div>
                    {message.date}
                  </div>
                  <div className='name'>
                    {message.senderId}
                  </div>
                  <div>
                    {message.text}
                  </div>
                </li>
                )
              })}
          </div>
      );
  }
}