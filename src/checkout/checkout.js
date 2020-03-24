import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <h2>Your cart</h2>
        <CartSummary />
        <Total selected={this.props.selected} />
      </div>
    );
  }
}

const CartSummary = ({}) => {
  return (
    <div className="summary__option" key={this.props.featureHash}>
      <div className="summary__option__label">{this.props.feature} </div>
      <div className="summary__option__value">
        {this.props.selectedOption[this.props.feature].name}
      </div>
      <div className="summary__option__cost">
        {this.props.conversion.format(
          this.props.selectedOption[this.props.feature].cost,
        )}
      </div>
    </div>
  );
};

const Total = ({ totalCost }) => {
  return (
    <div>
      <p>Total: {totalCost}</p>
    </div>
  );
};
