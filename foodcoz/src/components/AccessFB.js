import React, { Component } from 'react'


export default class MenuItems extends Component {
    render() {
        return (
            <div>
                <script value={this.props.menuInput} ref={this.props.onChangeMenu} />
                <script value={this.props.priceInput} ref={this.props.onChangePrice} />
                <script ref={this.props.onClick}/>
            </div>
        )
    }
}
