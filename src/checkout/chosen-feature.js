import React, {Component} from 'react';

export default class ChosenFeature extends Component {
    render () {
        return(
            //ok idk what should go inside the key
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.featureHash} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                    {this.props.conversion.format(this.props.selectedOption.cost)}
                </div>
            </div>
        )
    }
}