import { ChangeEvent } from 'react';
import './check_box-style.css';

function CheckBox({
  id,
  name,
  onChange,
  checked,
}: {
  checked: boolean;
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="check-box-container">
      <label htmlFor={id} className="label-wrapper">
        <input
          name={name}
          onChange={onChange}
          id={id}
          type="checkbox"
          className="checkbox"
          checked={checked}
        />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export default CheckBox;
