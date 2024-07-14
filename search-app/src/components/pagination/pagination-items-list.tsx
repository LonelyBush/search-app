import { NavLink } from 'react-router-dom';
import { PaginationProps } from '../../interfaces/props_interfaces';
import './pagination-items-style.css';

function Pagination({
  allResults,
  postPerPage,
  handlePageChange,
}: PaginationProps) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(allResults / postPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div className="pagination-container">
      {pages.map((elem) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'pagination-button active' : 'pagination-button'
            }
            to={`/search/${elem}`}
            key={elem}
            onClick={() => handlePageChange(elem)}
            type="button"
          >
            {elem}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Pagination;
