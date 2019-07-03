import React, { Component } from "react";
import "./../index.css";
import { Button } from 'react-bootstrap' ;

class InputPage extends Component {
  state = {
    value: 0
  }

  decrease = () => {
    if (this.state.value > 0){
      this.setState({ value: this.state.value - 1 });
    }
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="def-number-input number-input">
          <Button onClick={this.decrease} variant='danger'>-</Button>
          { this.state.value }
          <Button onClick={this.increase} variant='success'>+</Button>
        </div>
      );
  }
}

export default InputPage;