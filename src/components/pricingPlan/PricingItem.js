import React from 'react';
import PropTypes from 'prop-types';
import style from './pricingItem.module.css';

const PricingItem = ({ label, price, description, capacity, icon }) => (
  <li className={style.item}>
    <img src={icon} alt="icon" />
    <h2 className={style.label}>{label}</h2>
    <p className={style.capacity}>{capacity}</p>
    <p className={style.description}>{description}</p>
    <p className={style.price}>&#36;{price}&#47;MO</p>
    <button type="button" className={style.button}>
      Get Started
    </button>
  </li>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PricingItem;
