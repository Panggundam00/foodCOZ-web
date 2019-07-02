import React, { Component } from 'react'
import './App.css';

class EditTable extends Component {
    render() {
        return (
            <div className="App">
                <h1>Set Table</h1>

                <div>
                    <input placeholder="Enter number of table"></input>
                </div>
                <div>
                    <button>Accept</button>
                    <button>Decline</button>
                </div>
            </div>
        )
    }
}

export default EditTable
