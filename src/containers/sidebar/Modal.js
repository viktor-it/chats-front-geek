import React from 'react';
import ReactDOM from 'react-dom';


const element = document.createElement('div');

class Modal extends React.Component {

    componentDidMount() {
        let modalRoot = document.getElementById("modal-root");
        modalRoot.appendChild(element);
    }

    componentWillUnmount() {
        let modalRoot = document.getElementById("modal-root");
        modalRoot.removeChild(element);
    }
  
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            element,
        );
    }
}

export default Modal;
