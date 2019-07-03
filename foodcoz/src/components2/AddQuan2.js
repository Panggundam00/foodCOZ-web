import React, { Component } from 'react'

export default class InputTodo extends Component {
    render() {
        return (
            <h3 className={(this.props.val.isDone ? "done" : "")} key={this.props.index}>
                <button style={{ margin: 24 }} onClick={() => this.props.addList(this.props.index)}>
                +
                </button>
            </h3>
        )
    }
}
