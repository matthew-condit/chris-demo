import React, {Component} from 'react';

export default class ChosenFeature extends Component {
    render () {
        console.log(this.props.featureHash)
        console.log(this.props.selectedOption)
        return(
            //ok idk what should go inside the key
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.featureHash} </div>
                <div className="summary__option__value">{this.props.selectedOption.name[this.props.featureHash]}</div>
                <div className="summary__option__cost">
                    {this.props.conversion.format(this.props.selectedOption.cost[this.props.featureHash])}
                </div>
            </div>
        )
    }
}