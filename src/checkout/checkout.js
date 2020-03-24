import React, {Component} from 'react';
import ChosenFeature from './chosen-feature'
import Total from './total'

export default class Checkout extends Component {
    render () {
        console.log(Object.values(this.props.selected))
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected;
        return (
            <div>
                <ChosenFeature 
                    featureHash= {featureHash}
                    selectedOption={selectedOption}
                    conversion = {this.props.conversion}
                    updateFeature={this.props.update}
                    feature={feature}
                    store={this.props.store}
                />
            </div>
            
        );
        });
        console.log(summary)
        return (
            <div>
                <h2>Your cart</h2>
                {summary}
                <Total selected={this.props.selected}/>
            </div>
            
        )
    }
}

