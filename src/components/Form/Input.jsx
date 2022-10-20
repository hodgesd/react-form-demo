import PropTypes from "prop-types";

export default function Input({ label, type }) {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={label} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]),
};

Input.defaultProps = {
  type: "text",
};
