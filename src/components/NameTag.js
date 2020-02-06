import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
import styles from './NameTag.css';

const NameTag = () => {
  const [color, setColor] = useState('');
  return (
    <>
      <section className={styles.MainContainer}>
        <TextSelector />
        <ColorSelector setColor={setColor} />
        <Shape color={color} />
      </section>
    </>
  );
};
export default NameTag;
