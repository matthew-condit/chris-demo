import React, {Component} from 'react'
import Feature from './feature'

export default class Customize extends Component {
    render() {
        return(
            <div>
                <h2>Customize your laptop</h2>
                <Feature money={this.props.money} selected={this.props.selected} update={this.props.update}/>
            </div>
        )
    }
}