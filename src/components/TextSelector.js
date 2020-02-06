import React from 'react';
import styles from './TextSelector.css';
const TextSelector = () => {
  return (
    <div className={styles.Text}>
      <label>Choose your words</label>
      <input type='text' />
    </div>
  );
};
export default TextSelector;
