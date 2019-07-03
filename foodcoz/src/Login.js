import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="App">
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

       <Form.Control type="email" className="inputPlace" />

        <div>
        </div>
          <div height="1000">
       <Button className="loginButton" variant="success" href="/orderPage">LOG IN</Button>
       </div>
       
     </div>
        )
    }
}
