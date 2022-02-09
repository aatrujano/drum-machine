// STYLE
import './DrumPad.css';

// HOOKS
import { useEffect } from 'react';

const DrumPad = ({ id, sound, name, code, displayMessage, power }) => {
  const playSound = () => {
    if (power) {
      const currentSound = document.getElementById(id);
      currentSound.currentTime = 0;
      currentSound.play();
      displayMessage(name);
    }
  };
  const handleClick = () => {
    playSound();
  };

  

  return (
    <div id={name} className='drum-pad' onClick={handleClick}>
      <p>{id}</p>
      <audio id={id} className='clip' src={sound} />
    </div>
  );
};

export default DrumPad;
