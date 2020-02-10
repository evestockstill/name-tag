import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color, backgroundColor }) => {
  return (
    <div style={{ color, backgroundColor, width: '50vw', height: '50vh' }}>
      {text}
    </div>
  );
};
Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
export default Shape;
