import React from 'react';
import styles from './ColorSelector.css';

const ColorSelector = () => {
  return (
    <section className={styles.Color}>
      <label>Pen Color</label>
      <input type='color' />
      <label>Background Color</label>
      <input type='color' />
    </section>
  );
};
export default ColorSelector;
