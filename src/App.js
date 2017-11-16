import React, { Component } from 'react';
import './App.css';

import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';

class App extends Component {
    render() {
        return (
            <div id='app'>
                <div id='background'></div>
                <div id='content'>
                    <Navbar />
                    <div id='sections'>
                        <Home />
                        <About />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
