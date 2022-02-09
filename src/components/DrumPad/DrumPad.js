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

  useEffect(() => {
    const playWithKey = (e) => {
      if (e.keyCode === code) {
        playSound();
      }
    };

    document.addEventListener('keydown', playWithKey);
    return () => {
      document.removeEventListener('keydown', playWithKey);
    };
  }, [power]);

  return (
    <div id={name} className='drum-pad' onClick={handleClick}>
      <p>{id}</p>
      <audio id={id} className='clip' src={sound} />
    </div>
  );
};

export default DrumPad;
