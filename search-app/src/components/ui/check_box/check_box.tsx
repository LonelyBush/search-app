import { ChangeEvent } from 'react';
import './check_box-style.css';

function CheckBox({
  id,
  name,
  onChange,
}: {
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="check-box-container">
      <label htmlFor={name} className="label-wrapper">
        <input
          name={name}
          onChange={onChange}
          id={id}
          type="checkbox"
          className="checkbox"
        />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export default CheckBox;
