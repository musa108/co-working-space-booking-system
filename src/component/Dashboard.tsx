// components/Dashboard.tsx
import React from 'react';

type Revenue = {
  Basic: number;
  Premium: number;
  Executive: number;
  Team: number;
};

type DashboardProps = {
  revenue: Revenue;
};

const Dashboard: React.FC<DashboardProps> = ({ revenue }) => (
  <div className="m-5 p-6 border border-gray-300 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl mb-4 font-semibold">Revenue Dashboard</h2>
    <p className="mb-1">Basic: ${revenue.Basic.toFixed(2)}</p>
    <p className="mb-1">Premium: ${revenue.Premium.toFixed(2)}</p>
    <p className="mb-1">Executive: ${revenue.Executive.toFixed(2)}</p>
    <p className="mb-1">Team: ${revenue.Team.toFixed(2)}</p>
  </div>
);

export default Dashboard;
