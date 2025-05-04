
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Header } from '@/components/layout/Header';

const LogsPage = () => {
  const logs = [
    { timestamp: '2025-05-03 17:35:22', user: 'john.doe', action: 'Authentication successful', status: 'success' },
    { timestamp: '2025-05-03 17:32:45', user: 'alice.smith', action: 'Authentication successful', status: 'success' },
    { timestamp: '2025-05-03 17:30:11', user: 'unknown', action: 'Authentication failed', status: 'error' },
    { timestamp: '2025-05-03 17:28:30', user: 'robert.jones', action: 'Authentication successful', status: 'success' },
    { timestamp: '2025-05-03 17:25:17', user: 'sarah.wilson', action: 'Authentication successful', status: 'success' }
  ];

  return (
    <Layout activeItem="logs">
      <Header 
        title="Logs" 
        subtitle="System logs and events" 
      />
      
      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full rounded-md border border-input px-4 py-2"
          />
        </div>
        <div className="flex space-x-2">
          <select className="rounded-md border border-input px-3 py-2">
            <option>All types</option>
            <option>Authentication</option>
            <option>System</option>
            <option>Error</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Filter
          </button>
        </div>
      </div>
      
      <div className="rounded-lg border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="text-left p-3 font-medium">Timestamp</th>
                <th className="text-left p-3 font-medium">User</th>
                <th className="text-left p-3 font-medium">Action</th>
                <th className="text-left p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t hover:bg-blue-50">
                  <td className="p-3">{log.timestamp}</td>
                  <td className="p-3">{log.user}</td>
                  <td className="p-3">{log.action}</td>
                  <td className="p-3">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs ${
                      log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Showing 1-5 of 235 entries</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded hover:bg-blue-50">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded hover:bg-blue-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-blue-50">3</button>
            <button className="px-3 py-1 border rounded hover:bg-blue-50">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogsPage;
