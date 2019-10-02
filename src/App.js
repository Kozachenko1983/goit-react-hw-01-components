import React from 'react';
import Profile from './components/profile/Profile';
import Stats from './components/stats/Stats';
import Transactions from './components/transactions/Transactions';
import user from './components/profile/userData';
import stats from './components/stats/statsData';
import transactions from './components/transactions/transactions.json';
import PricingPlan from './components/pricingPlan/PricingPlan';
import PricingPlanItems from './components/pricingPlan/pricingPlanItems.json';

function App() {
  return (
    <div className="wrapper">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={PricingPlanItems} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
