import React, { Component  } from "react";
import "./../index.css";
import { Button } from 'react-bootstrap' ;

class InputPage extends Component {

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
        <div className="def-number-input number-input">
          <Button onClick={this.decrease} variant='danger'>-</Button>
          { this.state.value }
          <Button onClick={this.increase} variant='success'>+</Button>
        </div>
      );
  }
}

// export { Counter }
export default InputPage;