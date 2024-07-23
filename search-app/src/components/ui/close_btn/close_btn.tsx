/* eslint-disable jsx-a11y/control-has-associated-label */
import './close_btn-style.css';

function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      data-testid="close-btn"
      className="close-btn"
      onClick={onClick}
      type="button"
    />
  );
}

export default CloseBtn;
