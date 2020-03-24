import React, {Component} from 'react';
import RadioButton from './radio-button'

export default class Feature extends Component {
    render () {
        //ok ok ok wtf goes in the .keys() method; its not happy when its features
        //console.log(this.props.selected) is defined as the STORE from App.js
        const features = Object.keys(this.props.store).map((feature, idx) => {
            console.log(feature)
        const featureHash = feature + '-' + idx;
        return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
                <RadioButton
                selected={this.props.selected}
                conversion={this.props.conversion}
                feature={feature}
                featureHash={featureHash}
                update={this.props.update}
                store={this.props.store}
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