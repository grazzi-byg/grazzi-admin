import { useState } from "react";
import "./SelectField.css";

export default function SelectField({ label, options = [], placeholder = "Selecciona una opción", onSelect = () => { } }) {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        onSelect(value);
    };

    return (
        <div className="select-field">
            <label>{label}</label>
            <select
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
