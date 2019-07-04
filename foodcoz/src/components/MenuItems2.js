import React, { Component } from 'react'

// for(let index=0; ){

// }

export default class MenuItems extends Component {
    render() {
        return (
            <h3 key={this.props.index}>
                <span>
                </span>

                <button className="deleteButton" style={{ margin: 24 }} onClick={() => this.props.deleteList(this.props.index)}>
                    Delete
                </button>
            </h3>
        )
    }
}
