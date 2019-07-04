import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './../cssFile/Login.css';
import firebase from '../firebase';
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

  
// ของพลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลลล
// handleSignUp = async() => {
//   let querySnapshot = await db.collection('users').where("name", "==", this.state.name).get()
//   // console.log(querySnapshot.docs[0].id)
//   if ( querySnapshot.docs.length === 0 ){
//       let newUserRef = db.collection('users').doc()
//       newUserRef.set({ name: this.state.name })
//       .then(() => {
//           console.log(newUserRef.id)
//           this.props.navigation.navigate('Money', {name: this.state.name, id: newUserRef.id})                
//       })
//   } else {
//       this.props.navigation.navigate('Record', {name: this.state.name, id: querySnapshot.docs[0].id })
//   }
// }
    render() {
      
  // firebase.auth().onAuthStateChanged(function(user) {
  //   window.user = user; // user is undefined if no user signed in
  //   });
     
  //   // Sign in existing user
  //   firebase.auth().signInWithEmailAndPassword("user@example.com", "userexample")
  //   .catch(function (err) {
  //     // Handle errors
  //   });
    console.log(firebase.auth().currentUser) 

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

       <Form.Control type="password" className="inputPlace" data-init/>

        <div>
        </div>
          <div height="1000">
       <Button className="loginButton" variant="success" href="/meditMenu">LOG IN</Button>
       </div>
        
     </div>
        )
    }
}
