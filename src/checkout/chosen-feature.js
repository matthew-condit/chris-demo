import React, {Component} from 'react';

export default class ChosenFeature extends Component {
    render () {
        console.log(this.props.feature)
        return(
            //ok idk what should go inside the key
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption[this.props.feature].name}</div>
                <div className="summary__option__cost">
                    {this.props.conversion.format(this.props.selectedOption[this.props.feature].cost)}
                </div>
            </div>
        )
    }
}