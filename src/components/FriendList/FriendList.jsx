import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => (
  <ul className={style.list}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        isOnline={el.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
