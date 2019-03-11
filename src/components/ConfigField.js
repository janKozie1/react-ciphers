import React, { Component } from 'react';
import '../styles/configField.css'

class ConfigField extends Component {
    render() {
        let { name, value } = this.props
        return (
            <div className='config-container'>
                {name}
                <input defaultValue={value} />
            </div>
        );
    }
}

export default ConfigField;