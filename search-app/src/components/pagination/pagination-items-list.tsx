import { PaginationProps } from '../../interfaces/props_interfaces';

function Pagination({
  allResults,
  postPerPage,
  handlePageChange,
}: PaginationProps) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(allResults / postPerPage); i += 1) {
    pageNum.push(i);
  }
  return (
    <div className="pagination-container">
      {pageNum.map((elem) => {
        return (
          <button
            key={elem}
            onClick={() => handlePageChange(elem)}
            type="button"
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
