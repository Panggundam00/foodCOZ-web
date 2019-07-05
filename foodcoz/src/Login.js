import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css';
// import firebase from './firebase';
export default class Login extends Component {

  //   constructor(props) {
  //     super(props)
  //     this.state = { email: '', password: '' }
  //     this.handleChange = this.handleChange.bind(this)
  //     this.handleSubmit = this.handleSubmit.bind(this)
  //   }

  //   handleChange(event) {
  //     this.setState({ email: event.target.value })
  //   }

  //   handleSubmit(event) {
  //     alert(this.state.email)
  //     event.preventDefault()
  //   }

  //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   if (errorCode === 'auth/wrong-password') {
  //     alert('Wrong password.');
  //   } else {
  //     alert(errorMessage);
  //   }
  //   console.log(error);
  // });




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
        <div height="1000">
          <Button className="loginButton" variant="success" href="/meditMenu">LOG IN</Button>
        </div>

      </div>
    )
  }
}
