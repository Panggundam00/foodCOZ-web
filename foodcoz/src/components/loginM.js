import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class loginM extends Component {
    render() {
        return (
            <div>

            <div>
                <input className="space" type="text" value={this.props.valueMenu} onChange={this.props.onChangeMenu} />
                    <div> 
                        <lebal className="textLebal" >PASSWORD</lebal> 
                    </div>

                <input type="text" value={this.props.priceInput} onChange={this.props.onChangePrice} />

            <button className="acceptButton" onClick={this.props.onClick}>Login</button>
        </div>


        </div>
        )
    }
}


{/* <div className="App">
          <div>
            <h1>FoodCOZ</h1>
          </div>
          
          <div height="200">
            <lebal className="textLebal" >ID</lebal>
          </div>
          
          <Form.Control type="email" className="inputPlace" />
          
          <div>
            <lebal className="textLebal" >PASSWORD</lebal>
          </div>
          
          <Form.Control type="password" className="inputPlace" data-init/>
          
           <div>
           </div>
             <div height="1000">
          <Button className="loginButton" variant="success" href="/meditMenu">LOG IN</Button>
          </div>
           
          </div> */}