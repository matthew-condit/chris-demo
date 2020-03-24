import React, {Component} from 'react'
import Feature from './feature'

export default class Customize extends Component {
    render() {
        return(
            <div>
                <h2>Customize your laptop</h2>
                <Feature selected={this.props.selected} update={this.props.update} conversion={this.props.conversion} store={this.props.store}
                />
            </div>
        )
    }
}