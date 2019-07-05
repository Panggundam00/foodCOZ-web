import React, { Component } from "react";
import "./../index.css";
import { Table, Button } from 'react-bootstrap' ;
// import InputPage from './../components/Counter'

class TableOrder extends Component {

  constructor(props){
    super(props)
    console.log(this.props);
    
    this.state = {
      value: 0
    }
  }

  decrease = () => {

    if (this.state.value > 0){
      this.setState({ value: this.state.value - 1 }, () => {
        this.props.delQuan(this.state.value)
        this.props.decreaseListOrder(this.props.index)
      });
    }

  }

  increase = () => {
    this.setState({ value: this.state.value + 1 } , ()=>{
      this.props.plusQuan(this.props.value)
      this.props.increaseListOrder(this.props.index)
    });
  }

  render() {
    return (
        <div className="def-number-input number-input" >
          <Table striped bordered hover variant='dark'>
            <tbody>
              <tr>
                <td>{this.props.val.price_fb}</td>
                <td>{this.props.val.menu_fb}</td>
                <td>
                  <Button onClick={this.decrease} variant='danger'>-</Button>
                    { this.state.value }
                   <Button onClick={this.increase} variant='success'>+</Button>
                </td>
                </tr>
            </tbody>
          </Table>
        </div>
      );
  }
}

export default TableOrder;