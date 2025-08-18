/* eslint-disable react/prop-types */
import "./TextAreaField.css";

export default function TextAreaField({ label, name, placeholder }) {
  return (
    <div className="textarea-field">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder}></textarea>
    </div>
  );
}