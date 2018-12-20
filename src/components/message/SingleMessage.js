import React from 'react';
import classes from './Message.module.css';
import pic from './img/woman-4.png';

export default class SingleMessage extends React.Component {
	render(){
		return(
		    <div className={classes.superBlock}>
                {/*<img className={classes.miniFoto} src="./img/woman-4.png" />*/}
                <img className={classes.miniFoto} src={pic} />
                <div className={classes.block}>
                  <div className={classes.blockSms}>
                    <div className={classes.name}>
                      {this.props.message.sender_name}
                    </div>
                    <div>
                      {this.props.message.message}
                    </div>
                  </div>
                  <div className={classes.time}>
                   {this.props.outputTime.toLocaleTimeString()} 
                  </div>
                </div>
          	</div>
		)
	}

}
