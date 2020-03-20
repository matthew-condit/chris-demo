import React, {Component} from 'react';
import slugify from 'slugify';

export default class RadioButton extends Component {
    
    render () {
        console.log(this.props.features)
        const options = this.props.features.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                //the dreaded 13th line #GazeIntoTheAbyss
                name={slugify(this.props.features)}
                checked={item.name === this.props.selected[this.props.features].name}
                //
                onChange={e => this.updateFeature(this.props.features, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.money.format(item.cost)})
            </label>
            </div>
        )
    })
    return (
        {options}
    )
    }
}