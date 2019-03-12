import React, { Component } from 'react';
import '../styles/configField.css';
import {configValidtaion} from '../algorithms/inputValidation'

class ConfigField extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, value: this.props.value }
    }
    handleInputChange = async (e) => {
        let { value } = e.target
        await this.setState({
            value: configValidtaion[this.state.name](value,'check') ? configValidtaion[this.state.name](value,'parse') : this.state.value
        })
        this.props.onChange(this.state.name, this.state.value)
    }
    render() {
        let { name, value } = this.state
        return (
            <div className='config-container'>
                {name}
                <input defaultValue={value} onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default ConfigField;