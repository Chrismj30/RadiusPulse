
import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="rounded-md border border-input bg-white px-3 py-2 pl-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <button className="rounded-full bg-white p-2 shadow hover:shadow-md">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Notifications</span>
        </button>
      </div>
    </div>
  );
};
