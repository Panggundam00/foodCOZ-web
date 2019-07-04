import React, { Component } from 'react'
import './../App.css'
import { Table } from 'react-bootstrap'

export default class Ordered extends Component {
    render() {
        // if (this.props.val.quantity > 0){
        return (
            
            <div className="App">
                <Table striped bordered hover variant='dark'>
                    <tbody>
                        <tr>
                            <td>{this.props.val.price_fb}</td>
                            <td>{this.props.val.menu_fb}</td>
                            <td>{this.props.val.quantity}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
        // }
    }
}
