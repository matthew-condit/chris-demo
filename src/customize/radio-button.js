import React, {Component} from 'react';
import slugify from 'slugify';

export default class RadioButton extends Component {
    static default = {options: {}}
    render () {
        //console.log(this.props.feature)
        const item = this.props.feature 
            //console.log(item)
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        //the dreaded 13th line #GazeIntoTheAbyss
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        //
                        onChange={e => this.updateFeature(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({this.props.money.format(item.cost)})
                    </label>
                </div>
            )
    }
}