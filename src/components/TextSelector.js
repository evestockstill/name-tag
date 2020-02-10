import React from 'react';
import styles from './TextSelector.css';
import PropTypes from 'prop-types';

const TextSelector = ({ text, onChange }) => (
  <>
    <div className={styles.Text}>
      <label>Write your name</label>
      <input
        type='text'
        name='text'
        value={text}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  </>
);
TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextSelector;
