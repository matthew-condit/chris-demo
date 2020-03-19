import React, {Component} from 'react';
import Checkout from './checkout/checkout';
import Customize from './customize/customize'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export default class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  
  updateFeature = (feature, newValue) => {
      const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
    };
      render() {
    return(
      <div>
        <Customize store={this.state.state} money={USCurrencyFormat} selected={this.state.updateFeature}/>
        <Checkout store={this.state.state} money={USCurrencyFormat} selected={this.state.updateFeature}/>
      </div>
      
    )
  }
}