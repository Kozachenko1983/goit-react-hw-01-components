import React from 'react';
import Profile from '../Profile/Profile.jsx';
import Stats from '../Stats/Stats.jsx';
import Transactions from '../Transactions/Transactions.jsx';
import user from '../Profile/userData';
import stats from '../Stats/statsData';
import transactions from '../Transactions/transactions.json';
import FriendList from '../FriendList/FriendList.jsx';
import friends from '../FriendList/Friends.json';
import style from './App.module.css';

const App = () => (
  <div className={style.wrapper}>
    <>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  </div>
);
export default App;
