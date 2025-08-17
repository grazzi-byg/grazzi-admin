import "./InputField.css";

export default function InputField({ label, type = "text", placeholder }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}