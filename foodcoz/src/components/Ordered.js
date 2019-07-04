import React, { Component } from 'react'
import './../App.css'
import { Table } from 'react-bootstrap'

export default class Ordered extends Component {
    render() {
        return (
            <div className="App">
                <Table striped bordered hover variant='dark'>
                    <tbody>
                        <tr>
                            <td>{this.props.val.price}</td>
                            <td>{this.props.val.menu}</td>
                            <td>{this.props.val.quan}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
