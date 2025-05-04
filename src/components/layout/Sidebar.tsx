
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Users, 
  Settings, 
  Cog, 
  FileText, 
  Activity
} from 'lucide-react';

type NavItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  title: string;
  active?: boolean;
};

const NavItem = ({ icon: Icon, href, title, active }: NavItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </Link>
  );
};

export const Sidebar = ({ className, activeItem }: { className?: string, activeItem?: string }) => {
  return (
    <div className={cn("flex h-full min-h-screen w-64 flex-col bg-sidebar border-r", className)}>
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="radius-gradient h-8 w-8 rounded-full"></div>
          <span className="font-semibold text-sidebar-foreground text-lg">RadiusPulse</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          <NavItem
            icon={BarChart}
            href="/"
            title="Dashboard"
            active={activeItem === 'dashboard'}
          />
          <NavItem
            icon={Users}
            href="/users"
            title="Users"
            active={activeItem === 'users'}
          />
          <NavItem
            icon={Activity}
            href="/sessions"
            title="Active Sessions"
            active={activeItem === 'sessions'}
          />
          <NavItem
            icon={FileText}
            href="/logs"
            title="Logs"
            active={activeItem === 'logs'}
          />
          <NavItem
            icon={Cog}
            href="/settings"
            title="Settings"
            active={activeItem === 'settings'}
          />
        </nav>
      </div>
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <Settings className="h-4 w-4 text-sidebar-accent-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Server Status</p>
            <p className="text-xs text-sidebar-foreground/70 flex items-center">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
              Running
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
