import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
import styles from './NameTag.css';

export default function NameTag() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const nameTagOperator = {
    text: setText,
    color: setColor,
    backgroundColor: setBackgroundColor
  };
  const handleChange = ({ target }) => {
    nameTagOperator[target.name](target.value);
  };

  return (
    <>
      <section className={styles.MainContainer}>
        <TextSelector text={text} onChange={handleChange} />
        <ColorSelector
          color={color}
          backgroundColor={backgroundColor}
          onChange={handleChange}
        />
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </section>
    </>
  );
}
