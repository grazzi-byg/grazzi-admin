import "./TextAreaField.css";

export default function TextAreaField({ label, placeholder }) {
  return (
    <div className="textarea-field">
      <label>{label}</label>
      <textarea placeholder={placeholder}></textarea>
    </div>
  );
}