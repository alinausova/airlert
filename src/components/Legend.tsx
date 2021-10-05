import React from 'react';

export function Legend() {

  return (
    <div className="flex w-full items-end justify-start">
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-12 sm:w-24 h-1 bg-pink-700 "/>
        </div>
        poor
      </div>
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-12 sm:w-24 h-1 bg-red-400"/>
        </div>
        very low
      </div>
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-6 sm:w-12 h-1 bg-yellow-500"/>
          <span className="w-6 sm:w-12 h-1 bg-yellow-500"/>
        </div>
        low
      </div>
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-6 sm:w-12 h-1 bg-yellow-300"/>
          <span className="w-6 sm:w-12 h-1 bg-yellow-300"/>
        </div>
        moderate
      </div>
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-6 sm:w-12 h-1 bg-green-300"/>
          <span className="w-6 sm:w-12 h-1 bg-green-300"/>
        </div>
        good
      </div>
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <div className="flex">
          <span className="w-6 sm:w-12 h-1 bg-blue-300"/>
          <span className="w-6 sm:w-12 h-1 bg-blue-300"/>
        </div>
        excellent
      </div>
    </div>
  );
}