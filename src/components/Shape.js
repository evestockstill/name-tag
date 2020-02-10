import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color, backgroundColor }) => (
  <div style={{ color, backgroundColor, width: '300px', height: '200px' }}>
    {text}
  </div>
);

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
export default Shape;
