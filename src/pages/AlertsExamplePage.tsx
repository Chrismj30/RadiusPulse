import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  Bell,
} from "lucide-react";

export default function AlertsExamplePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Alert Examples</h1>
      <div className="grid gap-6">
        {/* Info Alert */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert that provides helpful context.
          </AlertDescription>
        </Alert>

        {/* Success Alert */}
        <Alert className="border-green-500 bg-green-50 dark:bg-green-900/20">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
          <AlertDescription className="text-green-600 dark:text-green-400">
            Your action has been completed successfully.
          </AlertDescription>
        </Alert>

        {/* Warning Alert */}
        <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
          <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <AlertTitle className="text-yellow-600 dark:text-yellow-400">Warning</AlertTitle>
          <AlertDescription className="text-yellow-600 dark:text-yellow-400">
            This action might have unexpected consequences.
          </AlertDescription>
        </Alert>

        {/* Error Alert */}
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong! Please try again later.
          </AlertDescription>
        </Alert>

        {/* Notification Alert */}
        <Alert className="border-blue-500 bg-blue-50 dark:bg-blue-900/20">
          <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-600 dark:text-blue-400">Notification</AlertTitle>
          <AlertDescription className="text-blue-600 dark:text-blue-400">
            You have 3 new messages in your inbox.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
} 