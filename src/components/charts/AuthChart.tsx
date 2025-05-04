
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { time: '00:00', successful: 65, failed: 12 },
  { time: '04:00', successful: 59, failed: 8 },
  { time: '08:00', successful: 80, failed: 15 },
  { time: '12:00', successful: 81, failed: 10 },
  { time: '16:00', successful: 76, failed: 18 },
  { time: '20:00', successful: 90, failed: 14 },
  { time: '24:00', successful: 55, failed: 7 },
];

export const AuthChart = () => {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="text-lg font-semibold mb-4">Authentication Attempts (24h)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorSuccessful" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="successful" stroke="#9b87f5" fillOpacity={1} fill="url(#colorSuccessful)" />
            <Area type="monotone" dataKey="failed" stroke="#ef4444" fillOpacity={1} fill="url(#colorFailed)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-2 gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-radius"></div>
          <span className="text-sm">Successful</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-sm">Failed</span>
        </div>
      </div>
    </div>
  );
};
