import React, { Component } from 'react';
import settingsImage from '../images/settings.png'
import '../styles/cipher-tile.css'

class cipherTile extends Component {
    state = { settingsOpen: false }
    onButtonClick = () => {
        this.setState({
            buttonClicked: !this.state.buttonClicked
        })
    }

    handleSettingsClick = () => {
        this.setState({
            settingsOpen: !this.state.settingsOpen
        })
    }
    render() {
        let { name, desc } = this.props.cipher
        let { userInput } = this.props

        return (
            this.state.settingsOpen ?
                (<div className='cipher-tile-settings'>

                </div>)
                :

                (<div className='cipher-tile'>
                    <div className='cipher-settings'>
                        <img src={settingsImage} onClick={this.handleSettingsClick} className='cipher-settings-image' alt='open settings' />
                    </div>
                    <div className='cipher-header'>

                        <h4>{name}</h4>
                    </div>
                    <p className='cipher-desc'>{desc}</p>
                    <div className='cipher-container-output'>
                        <input className='cipher-output' value={userInput ? this.props.cipher.algorithm(userInput) : ''} disabled />
                    </div>
                </div>)
        );
    }
}

export default cipherTile;