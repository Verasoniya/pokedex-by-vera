import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center gap-2 text-xl font-medium text-secondary-yellow">
      <img
        src="/assets/svg/pokeball-yellow.svg"
        alt="pokeball-yellow"
        className="w-6 h-6 animate-spin"
      />
      Loading..
    </div>
  );
};

export default Loading;
