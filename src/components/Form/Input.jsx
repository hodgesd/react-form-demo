import PropTypes from "prop-types";

export default function Input({ label }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input type={label} id={label} placeholder={label} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
