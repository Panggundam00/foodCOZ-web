import React, { Component } from "react";
import "./../index.css";
import { Table } from 'react-bootstrap' ;
import InputPage from './../components/Counter'

class TableOrder extends Component {

  render() {
    return (
        <div className="def-number-input number-input">
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Price</th>
                <th>Food</th>
                <th>Add / Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Kapraw1</td>
                <td>
                    <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw2</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw3</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw4</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw5</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw6</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw7</td>
                <td>
                  <InputPage />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
  }
}

export default TableOrder;