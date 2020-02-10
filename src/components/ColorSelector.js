import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorSelector.css';

const ColorSelector = ({ color, backgroundColor, onChange }) => {
  return (
    <>
      <section className={styles.Color}>
        <label>Pen Color</label>
        <input type='color' name='color' value={color} onChange={onChange} />
        <label>background color</label>
        <input
          type='color'
          name='backgroundColor'
          value={backgroundColor}
          onChange={onChange}
        />
      </section>
    </>
  );
};

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default ColorSelector;
