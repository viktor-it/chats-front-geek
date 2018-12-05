import React, { Component } from "react";

export default class ProfileUserFoto extends Component {
    render() {
        const { logoUser } = this.props;
        return <img src={logoUser} alt="user_foto"/>
    }
}