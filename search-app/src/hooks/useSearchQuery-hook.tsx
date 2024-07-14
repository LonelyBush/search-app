import { useEffect, useState } from 'react';

function useSearchQuery() {
  const [searchQueryFromLS, setSearchQuery] = useState(() => {
    const queryFromLS = localStorage.getItem('search-value');
    return queryFromLS !== null ? queryFromLS : '';
  });

  const setSearchQueryToLS = (query: string) => {
    localStorage.setItem('search-value', query);
  };
  useEffect(() => {
    const searchQueryLS = localStorage.getItem('search-value');
    if (searchQueryLS !== null) {
      setSearchQuery(searchQueryLS);
    }
  }, [searchQueryFromLS]);
  return { searchQueryFromLS, setSearchQueryToLS };
}

export default useSearchQuery;
