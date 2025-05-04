
import { cn } from "@/lib/utils";

type StatusType = "healthy" | "warning" | "critical";

interface StatusCardProps {
  title: string;
  status: StatusType;
  details?: string;
  className?: string;
}

export function StatusCard({ 
  title, 
  status, 
  details, 
  className 
}: StatusCardProps) {
  const statusClasses = {
    healthy: "bg-green-100 text-green-800 border-green-300",
    warning: "bg-amber-100 text-amber-800 border-amber-300",
    critical: "bg-red-100 text-red-800 border-red-300",
  };
  
  const dotClasses = {
    healthy: "bg-green-500 animate-pulse-light",
    warning: "bg-amber-500 animate-pulse-light",
    critical: "bg-red-500 animate-pulse-light",
  };

  return (
    <div className={cn(
      "rounded-lg border p-4",
      statusClasses[status],
      className
    )}>
      <div className="flex items-center gap-2">
        <div className={cn("h-3 w-3 rounded-full", dotClasses[status])}></div>
        <h3 className="font-medium">{title}</h3>
      </div>
      {details && <p className="mt-1 text-sm">{details}</p>}
    </div>
  );
}
