import React, { Component } from 'react'

export default class TodoItems2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          val: 0,
        };
    }

    addnumber = (val) => {
        this.setState({val: 1});
    }

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
                    {this.state.val}
                </span>
                <button style={{ margin: 24 }} onClick={() => this.addnumber}>
                +
                </button>
            </h3>
        )
    }
}
