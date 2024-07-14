import { useEffect, useState } from 'react';
import './items_list_style.css';
import { useParams } from 'react-router-dom';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import EmptySearchResult from '../empry-search-result/empty-search-result';
import Pagination from '../pagination/pagination-items-list';
import SearchComponentRow from '../search-component-row/search-component-row';

interface State extends PokeCall {}

function ItemsList({ searchValue }: ItemsListProps) {
  const [itemsListState, setItemsListState] = useState<State>({
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(20);
  const [hasError, setError] = useState<boolean>(false);
  const { results } = itemsListState;
  const indexOfLastPage = currentPage * postPerPage;
  const firstPostIndex = indexOfLastPage - postPerPage;
  const currentPosts = results.slice(firstPostIndex, indexOfLastPage);
  const { pageNum } = useParams();

  let itemListComponent;
  if (results.length === 0) {
    itemListComponent = <EmptySearchResult />;
  } else {
    itemListComponent = currentPosts.map((elem) => {
      return (
        <SearchComponentRow key={elem.url} name={elem.name} url={elem.url} />
      );
    });
  }

  useEffect(() => {
    const getSearchQueryData = (searchQuery: string) => {
      localStorage.setItem('search-value', searchQuery);
      setLoading(true);
      const changedQuery = searchQuery.trim().toLowerCase();
      getPokes('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0').then(
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
          'https://pokeapi.co/api/v2/pokemon?limit=300&offset=0',
        );
        setLoading(false);
        setItemsListState({ ...data });
      }
    };
    if (searchValue.length > 0) {
      getSearchQueryData(searchValue.toLowerCase());
    } else {
      setupConnection();
    }

    if (pageNum) {
      if (Number.isNaN(Number(pageNum)) || Number(pageNum) > indexOfLastPage) {
        setError(true);
      } else {
        setCurrentPage(Number(pageNum));
      }
    } else {
      setCurrentPage(1);
    }
  }, [searchValue, pageNum, indexOfLastPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  if (hasError) {
    throw new Error('Route error, dummy');
  }

  return (
    <>
      <div className="items-list-container">
        {loading ? <LoadingSpinner /> : itemListComponent}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        allResults={results.length}
        postPerPage={postPerPage}
      />
    </>
  );
}
export default ItemsList;
