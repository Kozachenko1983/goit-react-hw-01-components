import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import style from './stats.module.css';


const Stats = ({ title, stats }) => (

  <section className={style.section}>
    {title.length > 0 && <h2 className={style.title}>{title}</h2>}
    <ul className={style.list}>
      {stats.map(item => {

        // Генерация случайного цвета через Styled Components
        const RandomBgndLi = styled.li`
        background-color: #${`${Math.random().toString(16)}000000`.substring(2, 8).toUpperCase()};
        font-size: 14px;
        width: 20%;
        flex-grow: 1;
        color: #ffffff;
        border-radius: 3px;
      `;

        return (
          <RandomBgndLi key={item.id}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}&#37;</span>
          </RandomBgndLi>
        );
      })}
    </ul>
  </section>

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
