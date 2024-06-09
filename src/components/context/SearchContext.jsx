import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchQueryProviderValue = useMemo(
    () => ({ searchQuery, setSearchQuery }),
    [searchQuery],
  );
  return (
    <SearchContext.Provider value={searchQueryProviderValue}>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSearch() {
  return useContext(SearchContext);
}
