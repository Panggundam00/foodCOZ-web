import React, { Component } from 'react'

export default class InputMenu extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.menuInput} onChange={this.props.onChangeMenu} />
                <input type="text" value={this.props.priceInput} onChange={this.props.onChangePrice} />
                <button onClick={this.props.onClick}>Submit</button>
            </div>
        )
    }
}
