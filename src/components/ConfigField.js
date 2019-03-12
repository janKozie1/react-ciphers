import React, { Component } from 'react';
import '../styles/configField.css'

class ConfigField extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, value:this.props.value }
    }
    handleInputChange = async(e) => {
        await this.setState({
            value:e.target.value
        })
        this.props.onChange(this.state.name,this.state.value)
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