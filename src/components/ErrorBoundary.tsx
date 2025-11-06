import React from 'react';
import { RefreshCw, Home, AlertCircle, FileX, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// Router Error Component for React Router errors
export const RouterErrorBoundary: React.FC = () => {
  const error = useRouteError();

  // Check if this is a 404 error (either explicit status or catch-all route)
  const is404Error = (isRouteErrorResponse(error) && error.status === 404) ||
                     (!isRouteErrorResponse(error) && window.location.pathname !== '/');

  // Handle 404 errors specifically
  if (is404Error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <FileX className="h-16 w-16 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 dark:text-white">
                404
              </h1>
              <div className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400">
                Page Not Found
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find the page{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-300">
                {window.location.pathname}
              </code>
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-brand-500 hover:bg-brand-600 text-white min-w-[140px]"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="min-w-[140px]"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Popular Documentation Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/introduction"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → Introduction
              </a>
              <a
                href="/authentication"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → Authentication
              </a>
              <a
                href="/api-integrations"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → API Integrations
              </a>
              <a
                href="/quick-guides"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → Quick Guides
              </a>
              <a
                href="/wallet"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → Wallet
              </a>
              <a
                href="/transfer"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium transition-colors block"
              >
                → Transfer
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle other route errors
  const getErrorInfo = () => {
    if (isRouteErrorResponse(error)) {
      switch (error.status) {
        case 404:
          return {
            title: "Page Not Found",
            description: "The page you're looking for doesn't exist or has been moved to a different location.",
            icon: <FileX className="h-8 w-8 text-white" />,
            gradient: "from-blue-500 to-blue-600"
          };
        case 403:
          return {
            title: "Access Forbidden",
            description: "You don't have permission to access this page or resource.",
            icon: <Bug className="h-8 w-8 text-white" />,
            gradient: "from-orange-500 to-orange-600"
          };
        case 500:
          return {
            title: "Server Error",
            description: "Our servers are experiencing issues. Please try again in a few moments.",
            icon: <Bug className="h-8 w-8 text-white" />,
            gradient: "from-red-500 to-red-600"
          };
        default:
          return {
            title: `Error ${error.status}`,
            description: error.statusText || "An unexpected error occurred while loading this page.",
            icon: <Bug className="h-8 w-8 text-white" />,
            gradient: "from-red-500 to-red-600"
          };
      }
    }

    if (error instanceof Error) {
      return {
        title: "Navigation Error",
        description: error.message || "Something went wrong while navigating to this page.",
        icon: <Bug className="h-8 w-8 text-white" />,
        gradient: "from-red-500 to-red-600"
      };
    }

    return {
      title: "Unexpected Error",
      description: "An unknown error occurred while loading this page. Please try refreshing or go back to the homepage.",
      icon: <Bug className="h-8 w-8 text-white" />,
      gradient: "from-red-500 to-red-600"
    };
  };

  const errorInfo = getErrorInfo();
  const errorMessage = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
    ? error.message
    : 'An unexpected error occurred';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className={`bg-gradient-to-r ${errorInfo.gradient} px-6 py-8 text-center`}>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            {errorInfo.icon}
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{errorInfo.title}</h1>
          <p className="text-white/90 text-sm leading-relaxed">
            {errorInfo.description}
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-3 mb-6">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Error Details
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                {errorMessage}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => window.location.reload()}
              className="flex-1 bg-brand-500 hover:bg-brand-600 text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Page
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="flex-1"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// React Error Boundary for component errors
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console and any error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  handleRefresh = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Application Error</h1>
              <p className="text-red-100 text-sm">
                We encountered an unexpected error while loading this page
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-6">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Error Details
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                    {this.state.error?.message || 'An unknown error occurred'}
                  </p>
                  {isDevelopment && this.state.error?.stack && (
                    <details className="mt-2">
                      <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                        Stack Trace (Development Only)
                      </summary>
                      <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto max-h-32">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={this.handleRefresh}
                  className="flex-1 bg-brand-500 hover:bg-brand-600 text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Page
                </Button>
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="flex-1"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </div>

              {/* Help Text */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  What can you do?
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Try refreshing the page</li>
                  <li>• Check your internet connection</li>
                  <li>• Clear your browser cache</li>
                  <li>• Go back to the homepage</li>
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  If this problem persists, please contact our support team
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;