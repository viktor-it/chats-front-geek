import React, { Component } from "react";
import {Link} from "react-router-dom";

class ProfileUserFoto extends Component {
    render() {
        const { logoUser } = this.props;
        return <Link to="/"><img src={logoUser} alt="user_foto"/></Link>
    }
}
export default ProfileUserFoto;