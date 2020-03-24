import React from 'react';

export const Checkout = ({ selectedOptionsForCategory, conversion, store }) => {
  const selectedOptionsWithLabel = Object.keys(selectedOptionsForCategory).map(
    (categoryName) => {
      const option = store[categoryName].find(
        (opt) => opt.id === selectedOptionsForCategory[categoryName],
      );
      return {
        ...option,
        categoryName,
      };
    },
  );

  const totalCost = selectedOptionsWithLabel.reduce(
    (acc, item) => acc + item.cost,
    0,
  );
  return (
    <div>
      <h2>Your cart</h2>
      <CartSummary
        selectedOptionsWithLabel={selectedOptionsWithLabel}
        conversion={conversion}
      />
      <Total totalCost={totalCost} conversion={conversion} />
    </div>
  );
};

const CartSummary = ({ selectedOptionsWithLabel, conversion }) => {
  return selectedOptionsWithLabel.map((option) => (
    <div className="summary__option" key={option.id}>
      <div className="summary__option__label">{option.categoryName}</div>
      <div className="summary__option__value">{option.name}</div>
      <div className="summary__option__cost">
        {conversion.format(option.cost)}
      </div>
    </div>
  ));
};

const Total = ({ totalCost, conversion }) => {
  return (
    <div>
      <p>Total: {conversion.format(totalCost)}</p>
    </div>
  );
};
