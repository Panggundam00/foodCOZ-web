import React, { Component } from 'react'
import './App.css';
import './ManagePage.css'
import { Button } from 'react-bootstrap'

class ManagePage extends Component {
    render() {
        return (
            <div className="App">

                <div>
                    <span>Food</span> <span>Quantity</span> <span>Price</span>
                </div>

                <div>
                    <iframe className="detail"></iframe>
                </div>

                <div>
                    <p>Service charge-------------10%-----20</p>
                    <p>Vat------------------------7%------25</p>
                    <p>Total------370</p>
                </div>

                <Button variant="danger">PAY</Button>
            </div>
        )
    }
}

export default ManagePage
