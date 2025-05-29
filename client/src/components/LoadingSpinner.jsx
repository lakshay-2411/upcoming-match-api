import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-600 font-medium">Loading matches...</p>
        <p className="text-sm text-gray-500">Please wait while we fetch the latest fixtures</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;