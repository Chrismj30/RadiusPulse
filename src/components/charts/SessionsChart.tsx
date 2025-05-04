
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { time: '00:00', sessions: 120 },
  { time: '04:00', sessions: 180 },
  { time: '08:00', sessions: 250 },
  { time: '12:00', sessions: 310 },
  { time: '16:00', sessions: 290 },
  { time: '20:00', sessions: 350 },
  { time: '24:00', sessions: 280 },
];

export const SessionsChart = () => {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="text-lg font-semibold mb-4">Active Sessions (24h)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="sessions" 
              stroke="#7E69AB" 
              strokeWidth={2}
              dot={{ fill: '#7E69AB', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
