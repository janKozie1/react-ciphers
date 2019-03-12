import React, { Component } from 'react';
import * as algorithms from '../algorithms/algorithms'
import '../styles/app.css'
import Header from './Header'
import CipherTile from './CipherTile'

class App extends Component {
    state = {
        tempText: '',
        ciphers: [],
        mode: true
    }
    onHeaderClick = () => {
        this.setState({
            mode: !this.state.mode
        })
    }
    onInputChange = (e) => {
        this.setState({
            tempText: e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({
            accepted: this.state.tempText
        })
    }
    componentDidMount() {
        let temp = [];
        for (let data in algorithms) {
            temp.push(algorithms[data]);
        }
        this.setState({
            ciphers: [...temp]
        })
    }
    render() {
        return (
            <div className='app'>
                <Header onClick={this.onHeaderClick} mode={this.state.mode} />
                <form autoComplete="off" className='input-main' onSubmit={this.onFormSubmit}>
                    <input type='text' className={`input-main-user ${this.state.mode ? 'encryption' : 'decryption'}`} value={this.state.tempText} onChange={this.onInputChange} />
                </form>
                <div className='cipher-container'>
                    {
                        this.state.ciphers.map((e) => {
                            return <CipherTile cipher={e} mode={this.state.mode} userInput={this.state.accepted} key={e.name} />
                        })
                    }
                </div>
            </div>

        );
    }
}

export default App;