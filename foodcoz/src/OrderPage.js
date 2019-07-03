import React, { Component } from 'react'
import './App.css';
import './OrderPage.css'
import { Button, Badge } from 'react-bootstrap'

class OrderPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="tableNumber">
                    <Badge variant="secondary">TABLE NO.#</Badge>
                </div>

                <div className="headText">
                    <span className="textAdjust"><Badge variant="info">Food</Badge></span> 
                    <span className="quantityAdjust"><Badge variant="info">Quantity</Badge></span> 
                    <span className="priceAdjust"><Badge variant="info">Price</Badge></span>
                </div>

                <div>
                    <iframe className="detail" src="totalbill.html"></iframe>
                </div>

                <div>
                    <p>Service charge-------------10%-----20</p>
                    <p>Vat------------------------7%------25</p>
                    <p>Total------370</p>
                </div>

                <div>
                    <Button variant="danger" className="payButton">PAY</Button>
                </div>
            </div>
        )
    }
}

export default OrderPage
