import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './../cssFile/Login.css';
import { db } from '../firebase';
// import loginM from "../components/loginM";

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputemail: '', inputpassword: '',
      email: '', password: '',
      loginStatus: ''
    }
    //  this.handleChange = this.handleChange.bind(this)
    //  this.handleSubmit = this.handleSubmit.bind(this)
  }

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

  addList = () => {



    if (this.state.inputemail !== "" && this.state.inputpassword !== "") {

      this.setState({ email: this.state.inputemail });
      this.setState({ password: this.state.inputpassword });

    }

  };

  // db.collection('Users').where("Username", "==", this.state.inputemail).get().then(function(querySnapshot) {
  //   if(querySnapshot.Username == this.state.inputemail && querySnapshot.Password == this.state.inputpassword){
  //     this.setState({loginStatus: "/meditMenu"})
  //   }

  // }

  lOGIN = async () => {
    let querySnapshot = await db.collection('Users').where("Username", "==", this.state.inputemail).get()
    console.log(querySnapshot.empty)
    if (!querySnapshot.empty) {
      console.log(querySnapshot.docs[0].data())
      // let usn = db.collection('Users').doc(this.state.inputemail).Username;
      // let pw = db.collection('Users').doc(this.state.inputemail).Password;
      let username = querySnapshot.docs[0].data().Username
      let password = querySnapshot.docs[0].data().Password
      console.log(querySnapshot.docs[0].data().SVC);
      if (username === this.state.inputemail && password === this.state.inputpassword) {
        // this.setState({ loginStatus: "/meditMenu" })
        // let setDoc = db.collection('Users').doc(username).collection('Restaurant').doc('test');
        db.collection('Users').doc(username).collection('Restaurant').doc('test').delete();


        this.props.history.push({ pathname: '/meditMenu', state: { username: username} })
      }
    } else {
      alert('login error')
    }
  }



  handleEmailOnChange = event => {
    this.setState({ inputemail: event.target.value });

  };

  handlePasswordOnCharge = event => {
    this.setState({ inputpassword: event.target.value });
  };


  render() {

    console.log(this.state.inputemail);
    console.log(this.state.inputpassword);
    console.log(this.state.email);
    console.log(this.state.password);


    if (this.state.inputemail === "267" && this.state.inputpassword === "fuck" && this.state.loginStatus === "") {
      this.setState({ loginStatus: "/meditMenu" })
    }

    console.log(this.state.loginStatus);


    // firebase.auth().onAuthStateChanged(function(user) {
    //   window.user = user; // user is undefined if no user signed in
    //   });

    //   // Sign in existing user
    //   firebase.auth().signInWithEmailAndPassword("user@example.com", "userexample")
    //   .catch(function (err) {
    //     // Handle errors
    //   });
    // console.log(firebase.auth().currentUser) 

    return (
      <div className="App">
        <div>
          <h1>FoodCOZ</h1>
        </div>

        <div height="200">
          <lebal className="textLebal" >ID</lebal>
        </div>

        <Form.Control onChange={this.handleEmailOnChange} value={this.state.inputemail} type="email" className="inputPlace" />

        <div>
          <lebal className="textLebal" >PASSWORD</lebal>
        </div>

        <Form.Control onChange={this.handlePasswordOnCharge} type="password" className="inputPlace" data-init />

        <div>
        </div>
        <div height="1000">
          <Button className="loginButton" variant="success" onClick={this.lOGIN}>LOG IN</Button>

        </div>
      </div>


      /* <div>
      <loginM
      valueMenu={this.state.inputemail}
      valuePrice={this.state.inputpassword}
      onChangeMenu={this.handleEmailOnChange}
      onChangePrice={this.handlePasswordOnCharge}
      onClick={this.addList}
      />
      </div> */

    )
  }
}
