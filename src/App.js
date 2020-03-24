import React, { Component } from 'react';
import Checkout from './checkout/checkout';
import { Customize } from './customize/customize';
import { accessSync } from 'fs';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
export default class App extends Component {
  constructor(props) {
    super(props);
    const { store } = props;
    this.state = {
      selectedOptionsForCategory: Object.keys(store).reduce(
        (acc, key) => ({
          ...acc,
          [key]: store[key][0].id,
        }),
        {},
      ),
    };
  }

  updateFeature = (category, newId) => {
    this.setState({
      selectedOptionsForCategory: {
        ...this.state.selectedOptionsForCategory,
        [category]: newId,
      },
    });
  };

  render() {
    const { selectedOptionsForCategory } = this.state;
    const { store } = this.props;
    return (
      <div>
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <Customize
          selectedOptionsForCategory={selectedOptionsForCategory}
          update={this.updateFeature}
          conversion={USCurrencyFormat}
          store={store}
        />
        <Checkout
          selected={selectedOptionsForCategory}
          update={this.updateFeature}
          conversion={USCurrencyFormat}
          store={store}
        />
      </div>
    );
  }
}
