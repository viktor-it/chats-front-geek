import React from 'react';
import classes from './MessageListToday.module.css';
import pic from './img/woman-4.png';

export default class SingleMessage extends React.Component {
	render(){
    let StyleBlock;
    let StyleBlockSms;
    let StyleSuperBlock;
    if (this.props.message.receiver === 55) {
      StyleBlock = classes.blockMy
      StyleBlockSms = classes.blockSmsMy
      StyleSuperBlock = classes.superBlockMy
    } else {
      StyleBlock = classes.block
      StyleBlockSms = classes.blockSms
      StyleSuperBlock = classes.superBlock
    }
		return(
		    <div className={StyleSuperBlock}>
                {/*<img className={classes.miniFoto} src="./img/woman-4.png" />*/}
                <div>
                  <img className={classes.miniFoto} src={pic} />
                </div>
                <div className={StyleBlock}>
                  <div className={StyleBlockSms}>
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
