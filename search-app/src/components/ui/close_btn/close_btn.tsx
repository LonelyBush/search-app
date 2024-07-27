/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
import './close_btn-style.css';

function CloseBtn({ onClick }: { onClick: () => void }) {
  const theme = useContext(ThemeContext);
  return (
    <button
      data-testid="close-btn"
      className={`close-btn ${theme}`}
      onClick={onClick}
      type="button"
    />
  );
}

export default CloseBtn;
