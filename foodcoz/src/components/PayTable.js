import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class PayTable extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th className="fixed-navFirstname">First Name</th>
                            <th className="fixed-navLastname marginleft">Last Name</th>
                            <th className="fixed-navUsername marginfarleft">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>.</td>
                            <td>.</td>
                            <td>.</td>
                            </tr>
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
        )
    }
}
