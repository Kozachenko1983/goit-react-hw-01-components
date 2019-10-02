import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import style from './pricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <>
    <h2>Task 3</h2>
    <ul className={style.pricingPlan}>
      {items.map(el => (
        <PricingItem
          key={el.id}
          label={el.label}
          capacity={el.capacity}
          price={el.price}
          description={el.description}
          icon={el.icon}
        />
      ))}
    </ul>
  </>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
