import React, { Component } from 'react';
import '../styles/cipher-tile.css'

class cipherTile extends Component {
    render() {
        let { name, desc} = this.props.cipher
        let { userInput } = this.props
        return (
            <div className='cipher-tile'>
                <h4 className='cipher-header'>{name}</h4>
                <p className='cipher-desc'>{desc}</p>
                <div className='cipher-container-input'>
                    <p className='cipher-output'>{userInput ? this.props.cipher.algorithm(userInput) : null}</p>
                </div>

            </div>
        );
    }
}

export default cipherTile;