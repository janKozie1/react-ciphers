import React, { Component } from 'react';
import * as algorithms from '../algorithms/algorithms'
import '../styles/app.css'
import Header from './Header'

class App extends Component {
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
                <div class='input-main'>
                    <input type='text' id='input-main-user' />
                </div>
            </div>

        );
    }
}

export default App;