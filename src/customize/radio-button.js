import React, {Component} from 'react';
import slugify from 'slugify';

export default class RadioButton extends Component {
    render () {
        //this one renders the item with the id
        //console.log(this.props.featureHash)
        //this one renders the item without the id
        
        //console.log(this.props.selected)
        //console.log(this.props.money)

        const item = this.props.feature 
            //console.log(item)
            console.log(this.props.feature)
            const itemHash = slugify(JSON.stringify(this.props.featureHash));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        //the dreaded 13th line #GazeIntoTheAbyss
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        //now its mad at this line #whyGodwhy
                        onChange={e => this.props.update(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({this.props.money.format(item.cost)})
                    </label>
                </div>
            )
    }
}