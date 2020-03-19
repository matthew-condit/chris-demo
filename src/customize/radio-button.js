import React, {Component} from 'react';
import slugify from 'slugify';

export default class RadioButton extends Component {
    render () {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                //the dreaded 13th line #GazeIntoTheAbyss
                name={slugify(this.props.features)}
                checked={this.props.item.name === this.props.selected[this.props.features].name}
                //
                onChange={e => this.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {this.props.item.name} ({this.props.money.format(this.props.item.cost)})
            </label>
            </div>
        );
    }
}