
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  className 
}: StatsCardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-5 shadow-sm card-hover", 
      className
    )}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {trend && (
            <p className={`text-xs mt-1 flex items-center ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'}{' '}
              {trend.value}%
            </p>
          )}
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        {icon && <div className="text-radius">{icon}</div>}
      </div>
    </div>
  );
}
