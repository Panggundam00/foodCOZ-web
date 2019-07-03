import React, { Component } from 'react'

export default class MenuItems extends Component {
    render() {
        return (
            <h3 className={(this.props.val.isDone ? "done" : "")} key={this.props.index}>
                <span onClick={() => this.props.handleMenuDone(this.props.index)}>
                    {this.props.val.detail}
                </span>
                <button style={{ margin: 24 }} onClick={() => this.props.deleteList(this.props.index)}>
                    Delete
                </button>
            </h3>
        )
    }
}
