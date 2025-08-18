/* eslint-disable react/prop-types */
import "./InputField.css";

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
}) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}