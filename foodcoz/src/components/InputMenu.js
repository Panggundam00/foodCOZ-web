import React, { Component } from 'react'

export default class MenuTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.onChange} />
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}
