import React, {Component} from 'react';
import RadioButton from './radio-button'

export default class Feature extends Component {
    //static defaultProps = { feature: [] };
    render () {
        //ok ok ok wtf goes in the .keys() method; its not happy when its features
        const features = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
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