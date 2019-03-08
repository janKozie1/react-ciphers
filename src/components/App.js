import React, { Component } from 'react';
import * as algorithms from '../algorithms/algorithms'
import '../styles/app.css'
import Header from './Header'

class App extends Component {
    state = {
        userText:''
    }
    onInputChange = (e) => {
        this.setState({
            userText:e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        alert(this.state.userText)
    }
    componentDidMount() {
        for (let data in algorithms) {
            console.log(data)
            console.log(algorithms[data])
        }
    }
    render() {
        return (
            <div className='app'>
                <Header />
                <form className='input-main' onSubmit={this.onFormSubmit}>
                    <input type='text' id='input-main-user' value={this.state.userText} onChange={this.onInputChange} />
                </form>
            </div>

        );
    }
}

export default App;