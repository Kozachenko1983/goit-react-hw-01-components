import React from 'react';
import PropTypes from 'prop-types';
import style from './profile.module.css';

const Profile = ({ avatar, name, alt, tag, location, stats }) => (
  <div>
    <h2>Task 1</h2>
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={alt} className={style.avatar} />
        <p className={style.name}> {name} </p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.defaultProps = {
  alt: 'user image',
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
