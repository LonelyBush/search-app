/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
import styles from './close_btn-style.module.css';

function CloseBtn({ onClick }: { onClick: () => void }) {
  const theme = useContext(ThemeContext);
  return (
    <button
      data-testid="close-btn"
      className={`${styles[`close-btn`]} ${styles[`${theme}`]}`}
      onClick={onClick}
      type="button"
    />
  );
}

export default CloseBtn;
