import React, { Component } from 'react';
import '../styles/cipher-tile.css'

class cipherTile extends Component {
    state = { buttonClicked: false }
    onButtonClick = () => {
        this.setState({
            buttonClicked:!this.state.buttonClicked
        })
    }
    render() {
        let { name, desc } = this.props.cipher
        let { userInput } = this.props
        //let buttonClass = this.state.buttonClicked ? 'cipher-button-more-clicked' : 'cipher-button-more'

        return (
            <div className='cipher-tile'>
                <div className='cipher-header'>
                    <div className='cipher-more'>
                        <button onClick={this.onButtonClick} className='cipher-button-more'>
                            ?
                        </button>
                    </div>
                    <h4>{name}</h4>
                </div>
                <p className='cipher-desc'>{desc}</p>
                <div className='cipher-container-output'>
                    <input className='cipher-output' value={userInput ? this.props.cipher.algorithm(userInput) : ''} disabled/>
                </div>

            </div>
        );
    }
}

export default cipherTile;