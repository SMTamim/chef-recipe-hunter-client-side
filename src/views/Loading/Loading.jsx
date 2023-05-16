import React from 'react';

const Loading = () => {
  return (
    <div className="grid flex-grow h-20 bg-gray-800 card rounded-box place-items-center">
      <progress className="w-56 progress"></progress>
    </div>
  );
};

export default Loading;