
import React from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export const Layout = ({ children, activeItem }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar activeItem={activeItem} />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};
