import React from 'react';
import Sidebar from '../components/SideBar';
import Card from '../components/Card';

const usersData = [
  { country: 'United States', count: 35 },
  { country: 'India', count: 7 },
  { country: 'Singapore', count: 7 },
  { country: 'Vietnam', count: 6 },
  { country: 'Canada', count: 4 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <div className="cards">
          <Card title="Users" value="76K" />
          <Card title="New Users" value="69K" />
        </div>
        
      </main>
    </div>
  );
};

export default Dashboard;
