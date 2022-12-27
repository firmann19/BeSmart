import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
            <div className='service-item'>
                <div className='service-item-icon'>
                    <img src={this.props.icon} alt='icon'></img>
                </div>
                <div className='service-item-content'>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
