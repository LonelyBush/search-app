import { useEffect, useState } from 'react';
import './items_list_style.css';
import SearchItem from '../search_item/search_item';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import EmptySearchResult from '../empry-search-result/empty-search-result';

interface State extends PokeCall {}

function ItemsList({ searchValue }: ItemsListProps) {
  const [itemsListState, setItemsListState] = useState<State>({
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { results } = itemsListState;

  let itemListComponent;
  if (results.length === 0) {
    itemListComponent = <EmptySearchResult />;
  } else {
    itemListComponent = results.map((elem) => {
      return <SearchItem key={elem.url} name={elem.name} url={elem.url} />;
    });
  }

  useEffect(() => {
    const getSearchQueryData = (searchQuery: string) => {
      localStorage.setItem('search-value', searchQuery);
      setLoading(true);
      const changedQuery = searchQuery.trim().toLowerCase();
      getPokes('https://pokeapi.co/api/v2/pokemon?limit=120&offset=0').then(
        (data) => {
          setLoading(false);
          const getResults = data.results;
          const filterResults = getResults.filter((elem: PokeResult) =>
            elem.name.includes(changedQuery),
          );
          setItemsListState({ results: filterResults });
        },
      );
    };
    const setupConnection = async () => {
      const getQueryFromLS = localStorage.getItem('search-value');
      if (getQueryFromLS !== null) {
        getSearchQueryData(getQueryFromLS);
      } else {
        setLoading(true);
        const data = await getPokes(
          'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
        );
        setLoading(false);
        setItemsListState({ ...data });
      }
    };
    setupConnection();
    if (searchValue.length > 0) {
      getSearchQueryData(searchValue.toLowerCase());
    }
  }, [searchValue]);

  return (
    <div className="items-list-container">
      {loading ? <LoadingSpinner /> : itemListComponent}
    </div>
  );
}
export default ItemsList;
