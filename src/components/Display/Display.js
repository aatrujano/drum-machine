// STYLE
import './Display.css';

const Display = ({ display, power, togglePower }) => {
  // CLASSES
  const isOn = !power ? 'off' : 'on';

  // EVENT HANDLERS
 
  
  return (
    <div className='controls'>
      <div onClick={togglePower} className={`powerButton ${isOn}`}>
        <div className='powerIndicator'></div>
      </div>
      <div id='display' className={`display ${isOn}`}>
        <p className='displayText'>{display}</p>
      </div>
    </div>
  );
};

export default Display;
