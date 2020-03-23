import React, {Component} from 'react';
import RadioButton from './radio-button'

export default class Feature extends Component {
    render () {
        //ok ok ok wtf goes in the .keys() method; its not happy when its features
        //console.log(this.props.selected) is defined as the STORE from App.js
        const features = Object.keys(this.props.conversion).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        console.log("This is money in feature ", this.props.money)
        return (
            
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
                <RadioButton
                selected={this.props.selected}
                money={this.props.money}
                feature={feature}
                featureHash={featureHash}
                update={this.props.update}
            />
            </legend>
        </fieldset>
        )
    })
        return(
            <div>
                {features}
            </div>
            
        )
    //it may get mad at me because there isn't a return statement, but we'll cross that bridge when we get there
}
}