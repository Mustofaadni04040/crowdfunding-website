import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import useDebounce from '../../../hooks/useDebounce';

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [internalQuery, setInternalQuery] = useState(searchQuery);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(internalQuery, 300);

  const onFundraiserPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(debouncedQuery);
      navigate('/donasi');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex items-center gap-2 px-2 py-0 bg-slate-200 border-none ring-1 ring-slate-400 outline-none group rounded-md">
      <RiSearchLine className="text-slate-700" />
      <input
        value={internalQuery}
        onChange={(e) => setInternalQuery(e.target.value)}
        type="text"
        onKeyDown={onFundraiserPress}
        className="input-search outline-none border-none focus:ring-0 bg-slate-200 placeholder:text-sm placeholder:text-slate-700 text-sm text-slate-700 sm:min-w-80 lg:min-w-96"
        placeholder="Cari donasi..."
      />
    </div>
  );
}
