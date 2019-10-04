import React from 'react';
import PropTypes from 'prop-types';
import style from './stats.module.css';

const Stats = ({ title, stats }) => (
  <>
    <h2>Task 2</h2>
    <section className={style.section}>
      {title.length > 0 && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(item => {
          // Функция случайного цвета для фона li
          const randomColor = () => {
            return `#${`${Math.random().toString(16)}000000`
              .substring(2, 8)
              .toUpperCase()}`;
          };
          // Object inline-styles
          const randonColorBox = {};
          randonColorBox.backgroundColor = randomColor();

          return (
            <li key={item.id} style={randonColorBox} className={style.item}>
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
  </>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
