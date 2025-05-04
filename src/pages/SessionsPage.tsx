
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Header } from '@/components/layout/Header';
import { Activity } from 'lucide-react';

const SessionsPage = () => {
  const activeSessions = [
    { username: 'john.doe', ipAddress: '192.168.1.105', startTime: '10:23 AM', duration: '1h 15m' },
    { username: 'alice.smith', ipAddress: '192.168.1.187', startTime: '11:05 AM', duration: '33m' },
    { username: 'robert.brown', ipAddress: '192.168.1.201', startTime: '09:47 AM', duration: '2h 01m' }
  ];

  return (
    <Layout activeItem="sessions">
      <Header 
        title="Active Sessions" 
        subtitle="Monitor current user connections" 
      />
      
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Total Active</h3>
            <span className="text-2xl font-bold text-blue-600">356</span>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Peak Today</h3>
            <span className="text-2xl font-bold text-blue-600">412</span>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Average Duration</h3>
            <span className="text-2xl font-bold text-blue-600">1h 42m</span>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border bg-card p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Active Sessions</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Refresh
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Username</th>
                <th className="text-left p-2">IP Address</th>
                <th className="text-left p-2">Start Time</th>
                <th className="text-left p-2">Duration</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeSessions.map((session, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="p-2">{session.username}</td>
                  <td className="p-2">{session.ipAddress}</td>
                  <td className="p-2">{session.startTime}</td>
                  <td className="p-2">{session.duration}</td>
                  <td className="p-2">
                    <button className="text-red-500 hover:text-red-700">Disconnect</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default SessionsPage;
