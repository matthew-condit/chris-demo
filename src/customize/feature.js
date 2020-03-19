import React, {Component} from 'react';
import RadioButton from './radio-button'

export default class Feature extends Component {
    render () {
        const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        //maps over the meat of the radio button code
        const options = this.props.features[feature].map(item => {
            <RadioButton 
                features={this.props.features} item={item} 
                USCurrencyFormat={this.props.USCurrencyFormat} 
                selected={this.props.selected}
                money={this.props.money}
                options={this.props.options}
            />
        })
        return(
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
        )
    })
        return(
            {features}
        )
    //it may get mad at me because there isn't a return statement, but we'll cross that bridge when we get there
}
}