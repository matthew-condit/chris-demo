import React from 'react';

export const Customize = ({
  selectedOptionsForCategory,
  update,
  conversion,
  store,
}) => {
  return (
    <div>
      <h2>Customize your laptop</h2>
      {Object.keys(store).map((key) => (
        <CategoryBlock
          key={key}
          categoryName={key}
          update={update}
          conversion={conversion}
          selectedOptionId={selectedOptionsForCategory[key]}
          options={store[key]}
        />
      ))}
    </div>
  );
};

const CategoryBlock = ({
  categoryName,
  options,
  conversion,
  selectedOptionId,
  update,
}) => {
  return (
    <div>
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{categoryName}</h3>
          {options.map((option) => (
            <Option
              isSelected={option.id === selectedOptionId}
              conversion={conversion}
              categoryName={categoryName}
              update={update}
              option={option}
            />
          ))}
        </legend>
      </fieldset>
    </div>
  );
};

const Option = ({ isSelected, conversion, categoryName, update, option }) => {
  return (
    <div key={option.id} className="feature__item">
      <input
        type="radio"
        name={categoryName + option.id}
        className="feature__option"
        checked={isSelected}
        onChange={(e) => update(categoryName, option.id)}
      />
      <label htmlFor={categoryName + option.id} className="feature__label">
        {option.name} {conversion.format(option.cost)}
      </label>
    </div>
  );
};
