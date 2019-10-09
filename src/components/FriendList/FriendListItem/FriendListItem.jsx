import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={style.item}>
    {isOnline ? (
      <span className={style.statusOn} />
    ) : (
      <span className={style.statusOff} />
    )}
    <img className={style.avatar} src={avatar} alt="user avatar" />
    <p className={style.name}>{name}</p>
  </li>
);
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
