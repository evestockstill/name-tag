import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
import styles from './NameTag.css';

export default function NameTag() {
  const [text, setText] = useState('Your Name');
  const [color, setColor] = useState('#FFFFFF');
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const nameTagMethod = {
    text: setText,
    color: setColor,
    backgroundColor: setBackgroundColor
  };
  const handleChange = ({ target }) => {
    nameTagMethod[target.name](target.value);
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
