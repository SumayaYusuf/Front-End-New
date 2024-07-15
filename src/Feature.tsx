import React from 'react';

const Feature: React.FC<{ name: string, description: string, children: JSX.Element }> = props => {
  return (
    <div className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row bg-white p-4 rounded-lg shadow-md">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500 text-white sm:shrink-0">
        {props.children}
      </div>
      <div className="sm:min-w-0 sm:flex-1">
        <p className="text-md font-semibold leading-7 text-gray-900">{props.name}</p>
        <p className="mt-1 text-sm leading-6 text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

export default Feature;

