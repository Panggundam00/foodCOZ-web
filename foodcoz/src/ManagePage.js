import React, { Component } from 'react'
import './App.css';

class ManagePage extends Component {
    render() {
        return (
            <div className="App">
                <h1>Manage Store</h1>

                <div>
                    <button><a href="/EditTable">Set table</a></button>
                </div>

                <div>
                    <button><a>Set menu</a></button>
                </div>
            </div>
        )
    }
}

export default ManagePage
