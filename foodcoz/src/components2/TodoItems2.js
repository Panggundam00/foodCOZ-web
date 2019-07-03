import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        return (
            <h3 className={(this.props.val.isDone ? "done" : "")} key={this.props.index}>
                <span onClick={() => this.props.handleTodoDone(this.props.index)}>
                    {this.props.val.detail}
                </span>
                <button style={{ margin: 24 }} onClick={() => this.props.deleteList(this.props.index)}>
                -
                </button>

                {/* แก้ Quan เป็นตัวเลข */}
                <span onClick={() => this.props.handleQuan}>
                    {value}
                </span>
                <button style={{ margin: 24 }} onClick={() => this.props.addList(this.props.index)}>
                +
                </button>
            </h3>
        )
    }
}
