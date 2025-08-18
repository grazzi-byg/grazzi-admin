/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SelectField.css";

export default function SelectField({
  label,
  name,
  options = [],
  placeholder = "Selecciona una opción",
  onSelect = () => {},
}) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="select-field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        className="custom-select"
        value={selected}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
