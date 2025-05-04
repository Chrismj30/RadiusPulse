import { Layout } from '@/components/layout/Layout';
import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/ui/stats-card';
import { StatusCard } from '@/components/ui/status-card';
import { AuthChart } from '@/components/charts/AuthChart';
import { SessionsChart } from '@/components/charts/SessionsChart';
import { Activity, Users, Clock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActivityFeed = () => {
  const activities = [
    { user: 'keshav.reddy', action: 'Authentication successful', time: '2 minutes ago', status: 'successful' },
    { user: 'venkat.naidu', action: 'Authentication successful', time: '5 minutes ago', status: 'successful' },
    { user: 'unknown', action: 'Authentication failed', time: '7 minutes ago', status: 'failed' },
    { user: 'ramya.krishna', action: 'Authentication successful', time: '12 minutes ago', status: 'successful' },
    { user: 'lakshmi.devi', action: 'Authentication successful', time: '15 minutes ago', status: 'successful' }
  ];

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-blue-800">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0">
            <div className={`w-2 h-2 rounded-full mt-2 ${activity.status === 'successful' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <div>
              <p className="font-medium text-blue-900">{activity.user}</p>
              <p className="text-sm text-blue-600">{activity.action}</p>
              <p className="text-xs text-blue-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout activeItem="dashboard">
      <Header 
        title="Dashboard" 
        subtitle="Welcome to RadiusPulse Dashboard" 
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatsCard 
          title="Total Users" 
          value="2,845" 
          description="Active network users" 
          icon={<Users size={24} className="text-blue-500" />}
          trend={{ value: 12, isPositive: true }}
          className="bg-white border-blue-100"
        />
        <StatsCard 
          title="Active Sessions" 
          value="356" 
          description="Currently connected" 
          icon={<Activity size={24} className="text-blue-500" />}
          trend={{ value: 8, isPositive: true }}
          className="bg-white border-blue-100"
        />
        <StatsCard 
          title="Auth Rate" 
          value="98.2%" 
          description="Successful authentications" 
          icon={<Clock size={24} className="text-blue-500" />}
          trend={{ value: 2, isPositive: true }}
          className="bg-white border-blue-100"
        />
        <StatsCard 
          title="Database Size" 
          value="1.2 GB" 
          description="Total records stored" 
          icon={<Database size={24} className="text-blue-500" />}
          trend={{ value: 5, isPositive: false }}
          className="bg-white border-blue-100"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <StatusCard 
          title="RADIUS Server Status" 
          status="healthy" 
          details="Server is running normally. Uptime: 15 days, 7 hours" 
          className="bg-blue-50 border-blue-200 text-blue-800"
        />
        <StatusCard 
          title="Database Connection" 
          status="healthy" 
          details="Connected to MySQL database. Last sync: 2 minutes ago" 
          className="bg-blue-50 border-blue-200 text-blue-800"
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <AuthChart />
        <SessionsChart />
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ActivityFeed />
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Add New User
            </button>
            <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
              View All Sessions
            </button>
            <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
              View Authentication Logs
            </button>
            <Link to="/alerts" className="block w-full">
              <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                View Alert Examples
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
