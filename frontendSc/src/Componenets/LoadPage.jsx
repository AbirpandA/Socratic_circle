import React from 'react';
import Sidebar from './Sidebar';

const LoadPage = () => {
  return (
    <div className="flex min-h-screen bg-stone-50">
      <Sidebar />
      <div className="flex-1 p-8">
        {/* Load page content goes here */}
        <h1 className="text-4xl font-serif text-stone-800">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadPage; 