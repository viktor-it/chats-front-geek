import React from 'react';

export default class MessageList extends React.Component {
  render() {
    console.log(this.props.messages);
    return (
      <ul>                 
        {this.props.messages.map(message => {
          return (
           <li key = {message.id}>
             <div>
               {message.user}
             </div>
             <div>
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}