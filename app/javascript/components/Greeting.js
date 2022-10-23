import PropTypes from 'prop-types';

function Greeting(props) {
  const { id, message } = props;

  return (
    <div id={id}>
      <h1>{message}</h1>
    </div>
  );
}

Greeting.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Greeting;
