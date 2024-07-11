import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './items_list_style.css';
import SearchItem from '../search_item/search_item';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import EmptySearchResult from '../empry-search-result/empty-search-result';
import Pagination from '../pagination/pagination-items-list';

interface State extends PokeCall {}

function ItemsList({ searchValue }: ItemsListProps) {
  const [itemsListState, setItemsListState] = useState<State>({
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(20);
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const { results } = itemsListState;
  const indexOfLastPage = currentPage * postPerPage;
  const firstPostIndex = indexOfLastPage - postPerPage;
  const currentPosts = results.slice(firstPostIndex, indexOfLastPage);

  let itemListComponent;
  if (results.length === 0) {
    itemListComponent = <EmptySearchResult />;
  } else {
    itemListComponent = currentPosts.map((elem) => {
      return <SearchItem key={elem.url} name={elem.name} url={elem.url} />;
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

    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
  }, [searchValue, page]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`${pageNumber}`);
  };

  return (
    <div className="items-list-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path=":page" element={itemListComponent} />
        </Routes>
      )}
      <Pagination
        handlePageChange={handlePageChange}
        allResults={results.length}
        postPerPage={postPerPage}
      />
    </div>
  );
}
export default ItemsList;
