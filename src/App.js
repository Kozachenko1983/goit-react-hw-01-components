import React from 'react';
import Profile from './components/profile/Profile';
import Stats from './components/stats/Stats';
import Transactions from './components/transactions/Transactions';
import user from './components/profile/userData';
import stats from './components/stats/statsData';
import transactions from './components/transactions/transactions.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/FriendList.json';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
