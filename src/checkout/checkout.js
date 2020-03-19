import React, {Component} from 'react';
import ChosenFeature from './chosen-feature'
import Total from './total'

export default class Checkout extends Component {

    render () {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.store[feature];
    
        return (
            <div>
                <ChosenFeature 
                    feature={featureHash}
                    selectedOption={selectedOption}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
                <Total />
            </div>
            
        );
        });
        return (
            {summary}
        )
    }
}