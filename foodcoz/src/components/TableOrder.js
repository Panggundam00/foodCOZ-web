import React, { Component } from "react";
import "./../index.css";
import { Table } from 'react-bootstrap' ;
import InputPage from './../components/Counter'

class TableOrder extends Component {

  render() {
    return (
        <div className="def-number-input number-input">
          <Table striped bordered hover variant='dark'>
            <tbody>
              <tr>
                <td>{this.props.val.price_fb}</td>
                <td>{this.props.val.menu_fb}</td>
                <td>
                    <InputPage
                      plusQuan={this.props.plusQuan}
                      delQuan={this.props.delQuan}
                    />
                </td>
                </tr>
            </tbody>
          </Table>
        </div>
      );
  }
}

export default TableOrder;