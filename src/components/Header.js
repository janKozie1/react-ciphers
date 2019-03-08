import React, { Component } from 'react';
import '../styles/header.css'
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Ciphers</h1>
                <h2>Type your text and see it encrypted</h2>
            </div>
        );
    }
}

export default Header;