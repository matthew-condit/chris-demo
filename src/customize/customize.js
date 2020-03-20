import React, {Component} from 'react'
import Feature from './feature'

export default class Customize extends Component {
    render() {
        return(
            <div>
                <Feature money={this.props.money} selected={this.props.selected}/>
            </div>
        )
    }
}