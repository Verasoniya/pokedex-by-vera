import React from 'react';

const CommonCard = () => {
  return (
    <div
      className="bg-white px-4 py-3 rounded-2xl absolute right-0 bottom-24 flex flex-col items-start gap-1 w-52"
      style={{ boxShadow: '4px 4px 4px 0px #1F2F2066' }}
    >
      <p className="text-xs text-primary-yellow font-normal">#0032</p>
      <p className="text-base text-foreground font-semibold mb-2">Nidoran</p>
      <div className="flex items-center justify-center px-3 py-1 bg-purple-300 rounded-full self-end">
        <p className="text-purple-800 text-xs font-medium">Poison</p>
      </div>
    </div>
  );
};

export default CommonCard;
