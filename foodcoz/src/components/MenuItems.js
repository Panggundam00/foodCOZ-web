import React, { Component } from 'react'

export default class MenuItems extends Component {
    render() {
        return (
            <h3 key={this.props.index}>
                <span className="justify">
                    {this.props.val.menu.detail}
                </span>

                <span>
                    {this.props.val.price.detail +".-"}
                </span>
                <button className="deleteButton" style={{ margin: 24 }} onClick={() => this.props.deleteList(this.props.index)}>
                    Delete
                </button>
            </h3>
        )
    }
}
