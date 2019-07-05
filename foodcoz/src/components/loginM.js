import React, { Component } from 'react'
// import { Button, Form } from 'react-bootstrap'

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
