import React, { Component } from 'react';
import settingsImageWhite from '../images/settings.svg'
import settingsImageBlack from '../images/settings_black.svg';
import ConfigField from './ConfigField'

import '../styles/cipher-tile.css'

class cipherTile extends Component {
    state = { settingsOpen: false }

    handleSettingsClick = () => {
        this.setState({
            settingsOpen: !this.state.settingsOpen
        })
    }
    render() {

        let { name, desc, config } = this.props.cipher
        let { userInput } = this.props
        return (
            <div className='cipher-tile'>
                <div className='cipher-header'>
                    <div className='cipher-settings'>
                        <img src={settingsImageWhite} onClick={this.handleSettingsClick} className='cipher-settings-image' alt='open settings' />
                    </div>
                    <h4>{name}</h4>
                </div>
                {
                    !this.state.settingsOpen ? 
                        <div className='cipher-proper-container'>
                            <p className='cipher-desc'>{desc}</p>
                            <div className='cipher-container-output'>
                                <input className='cipher-output' value={userInput ? this.props.cipher.algorithm(userInput) : ''} disabled />
                            </div>
                        </div>
                        :
                        <div className='cipher-proper-container'>
                            {
                                Object.keys(config).map((e,i)=>{
                                    return <ConfigField key={i} name={e} value={config[e]}/>
                                })
                            }
                        </div>
                }

            </div>
        );
    }
}

export default cipherTile;