import PropTypes from "prop-types";

export default function Form({ fields }) {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log('email', form.email, form.elements.email);
    console.log('password', form.password, form.elements.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
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
