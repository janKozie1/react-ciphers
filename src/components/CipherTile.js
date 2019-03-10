import React, { Component } from 'react';
import '../styles/cipher-tile.css'

class cipherTile extends Component {
    render() {
        let { name, desc } = this.props.cipher
        let { userInput } = this.props
        return (
            <div className='cipher-tile'>
                <div className='cipher-header'>
                    <div className='cipher-more'>
                        <button className='cipher-button-more'>
                            ?
                        </button>
                    </div>
                    <h4>{name}</h4>
                </div>
                <p className='cipher-desc'>{desc}</p>
                <div className='cipher-container-output'>
                    <p className='cipher-output'>{userInput ? this.props.cipher.algorithm(userInput) : null}</p>
                </div>

            </div>
        );
    }
}

export default cipherTile;