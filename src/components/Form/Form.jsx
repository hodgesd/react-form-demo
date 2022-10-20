import PropTypes from "prop-types";
import Input from "./Input";

export default function Form({ fields }) {
  return (
    <form>
      {fields.map((field) => (
        <Input key={field.label} label={field.label} type={field.type} />
      ))}

      {/* TODO: Add a submit button! */}
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ).isRequired,
};
