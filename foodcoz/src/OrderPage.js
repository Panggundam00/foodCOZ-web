import React, { Component } from 'react'
import './App.css';
import './OrderPage.css'
import { Button, Badge } from 'react-bootstrap'
import { Table } from 'react-bootstrap'

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

                <div className="IframeByCSS">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Larry the Bird</td>
                            <td>EIEI</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
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
