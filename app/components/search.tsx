import { Search } from 'lucide-react';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="flex items-center gap-4">
      <input
        className="h-9 w-96 py-1 px-4 ring-tertiary-green border border-tertiary-green rounded-full text-primary-green placeholder:text-primary-green text-sm"
        placeholder="Search Pokémon"
      />
      <button className="flex items-center px-4 h-full bg-primary-green rounded-full">
        <Search className="stroke-white-foreground w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchInput;
