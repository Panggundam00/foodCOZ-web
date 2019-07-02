import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="App">
       <div>
         <h1>FoodCOZ</h1>
       </div>

       <label>ID</label>

       <div>
         <input/>
       </div>

       <div>
         <lebal>Password</lebal>
       </div>

       <div>
         <input/>
       </div>

       <button><a href="/managePage">Submit</a></button>
     </div>
        )
    }
}
