import React from 'react';
import PropTypes from 'prop-types';
import style from './transactions.module.css';

const Transactions = ({ items }) => (
  <>
    <h2>Task 4</h2>
    <table className={style.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(el => (
        <tbody key={el.id}>
          <tr>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
