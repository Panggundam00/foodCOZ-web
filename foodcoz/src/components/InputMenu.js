import React, { Component } from 'react'

export default class InputMenu extends Component {
    render() {
        return (
            <div>
                <span className="font-size30" > Name </span>
                <input className="space" type="text" value={this.props.menuInput} onChange={this.props.onChangeMenu} />
                <span className="font-size30"> Price </span>
                <input type="text" value={this.props.priceInput} onChange={this.props.onChangePrice} />
                <button className="acceptButton" onClick={this.props.onClick}>Submit</button>
            </div>
        )
    }
}
