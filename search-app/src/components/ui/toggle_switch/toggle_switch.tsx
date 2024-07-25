import { ChangeEvent } from 'react';
import './toggle_switch-style.css';

function ToggleSwitch({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="toggle-switch-container">
      <label htmlFor="toggle-switch" className="switch">
        <input
          onChange={onChange}
          id="toggle-switch"
          type="checkbox"
          className="switch-input"
        />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
