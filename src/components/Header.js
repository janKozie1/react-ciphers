import React, { Component } from 'react';
import '../styles/header.css'
class Header extends Component {

    render() {
        return (
            <div className='header'>
                <h1>Ciphers</h1>
                <h2>Type your text and see it 
                {
                    this.props.mode ? <span className={`header-span encryption`} onClick={this.props.onClick}> encrypted</span> : <span className='header-span decryption' onClick={this.props.onClick}> decrypted</span>
                }
                </h2>
            </div>
        );
    }
}

export default Header;