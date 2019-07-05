import React, { Component } from 'react'
import './../App.css';
import './../cssFile/PayPage.css'
import { Button, Badge } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'
import PayTable from './../components/PayTable'

class OrderPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="tableNumber gillsans">
                    <Badge variant="secondary">TABLE NO.#</Badge>
                </div>

                <div className="headText">
                    <span className="textAdjust"><Badge variant="info">Food</Badge></span> 
                    <span className="quantityAdjust"><Badge variant="info">Quantity</Badge></span> 
                    <span className="priceAdjust"><Badge variant="info">Price</Badge></span>
                </div>

                <div className="IframeByCSS">
                {this.state.listMenu.map((valMenu, index) => (
                    <PayTable
                        key={index}
                        val={valMenu}
                        index={index}
                    />
                    ))}
                    
                </div>

                <div>
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
