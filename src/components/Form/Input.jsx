import PropTypes from "prop-types";

export default function Form({ label }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input type={label} id={label} placeholder={label} />
    </div>
  );
}

Form.propTypes = {
  label: PropTypes.string.isRequired,
};
