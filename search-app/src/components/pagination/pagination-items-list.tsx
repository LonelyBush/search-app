import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { PaginationProps } from '../../interfaces/props_interfaces';
import './pagination-items-style.css';
import ThemeContext from '../../context/theme_context';

function Pagination({
  allResults,
  postPerPage,
  handlePageChange,
}: PaginationProps) {
  const theme = useContext(ThemeContext);
  const pages = [];
  for (let i = 1; i <= Math.ceil(allResults / postPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div
      data-testid="pagination-container"
      className={`pagination-container ${theme}`}
    >
      {pages.map((elem) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `pagination-button ${theme} active`
                : `pagination-button ${theme}`
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
