// STYLE
import './DrumMachine.css';

// COMPONENTS
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';

const DrumMachine = ({ display, sounds, power, togglePower, displayMessage }) => {
  return (
    <div className='outerContainer' id='drum-machine'>
      <div className='drumPadContainer'>
        {sounds.map((sound) => (
          <DrumPad
            key={sound.id}
            id={sound.kbrd}
            sound={sound.sound}
            name={sound.name}
            code={sound.code}
            displayMessage={displayMessage}
            power={power}
          />
        ))}
      </div>
      <Display display={display} power={power} togglePower={togglePower} />
    </div>
  );
};

export default DrumMachine;
