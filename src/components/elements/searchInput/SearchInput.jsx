import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useSearch } from '../../context/SearchContext';

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className=" flex items-center gap-2 px-2 py-0 bg-slate-200 border-none ring-1 ring-slate-400 outline-none group rounded-md">
      <RiSearchLine className="text-slate-700" />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="outline-none border-none focus:ring-0 bg-slate-200 placeholder:text-sm placeholder:text-slate-700 text-sm text-slate-700 sm:min-w-80 lg:min-w-96"
        placeholder="Cari donasi..."
      />
    </div>
  );
}
