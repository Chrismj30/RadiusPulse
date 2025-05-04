
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Header } from '@/components/layout/Header';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <Layout activeItem="settings">
      <Header 
        title="Settings" 
        subtitle="Configure system settings" 
      />
      
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-3 lg:col-span-4">
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5 text-blue-500" />
              General Settings
            </h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="server-name" className="text-sm font-medium">Server Name</label>
                <input 
                  id="server-name"
                  type="text" 
                  defaultValue="RADIUS-MAIN-01"
                  className="rounded-md border border-input px-3 py-2 w-full"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="auth-port" className="text-sm font-medium">Authentication Port</label>
                <input 
                  id="auth-port"
                  type="number" 
                  defaultValue="1812"
                  className="rounded-md border border-input px-3 py-2 w-full"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="accounting-port" className="text-sm font-medium">Accounting Port</label>
                <input 
                  id="accounting-port"
                  type="number" 
                  defaultValue="1813"
                  className="rounded-md border border-input px-3 py-2 w-full"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="log-level" className="text-sm font-medium">Log Level</label>
                <select 
                  id="log-level"
                  className="rounded-md border border-input px-3 py-2 w-full"
                >
                  <option>Debug</option>
                  <option selected>Info</option>
                  <option>Warning</option>
                  <option>Error</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  id="enable-detailed-logging"
                  type="checkbox" 
                  defaultChecked={true}
                  className="rounded border-input h-4 w-4"
                />
                <label htmlFor="enable-detailed-logging" className="text-sm font-medium">Enable Detailed Logging</label>
              </div>
              
              <div className="pt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
