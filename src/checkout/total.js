import React, {Component} from 'react';

export default class Total extends Component {
    render () {
        const total = Object.keys(this.props.store.selected).reduce(
            (acc, curr) => acc + this.props.store.selected[curr].cost,
            0
          );
        return(
            <div>
                <p>Total: {total}</p>
            </div>
        )
    }
}