// STYLE
import './App.css';

// COMPONENTS
import DrumMachine from './components/DrumMachine/DrumMachine';

// HOOKS
import { useState } from 'react';

// DATA
import { soundsArr } from './soundData';

function App() {
  const [sounds] = useState(soundsArr);
  const [display, setDisplay] = useState('On');
  const [power, setPower] = useState(true);

  const togglePower = () => {
    setPower((prev) => !prev);
    setDisplay(!power ? 'On' : 'Off');
  };

  const displayMessage = (message) => {
    if (power === true && display !== 'Off') {
      setDisplay(message);
      setTimeout(() => {
        setDisplay('----');
      }, 1000);
    }
  };

  return (
    <div className='App'>
      <DrumMachine
        display={display}
        sounds={sounds}
        power={power}
        togglePower={togglePower}
        displayMessage={displayMessage}
      />
    </div>
  );
}

export default App;
