import React, {Component} from 'react';

export default class Total extends Component {
    render () {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
          console.log(total)
        return(
            <div>
                <p>Total: {total}</p>
            </div>
        )
    }
}