import React, { useState } from 'react';
import FirstSwitch from './switches/FirstSwitch';
import SecondSwitch from './switches/SecondSwitch';

const Switch = (register) => {
  const [activeSwitch, setActiveSwitch] = useState('switch1');
  const handleSwitch1 = () => {
    setActiveSwitch('switch1');
  };
  const handleSwitch2 = () => {
    setActiveSwitch('switch2');
  };
  return (
    <div>
      <ul className="switch">
        <li
          className={activeSwitch === 'switch1' ? 'active' : ''}
          onClick={handleSwitch1}
        >
          <div>Фіз. особа</div>
        </li>
        <li
          className={activeSwitch === 'switch2' ? 'active' : ''}
          onClick={handleSwitch2}
        >
          <div>Юр. особа</div>
        </li>
      </ul>

      <div className="form-containers">
        {activeSwitch === 'switch1' ? (
          <FirstSwitch {...register} />
        ) : (
          <SecondSwitch />
        )}
      </div>
    </div>
  );
};
export default Switch;
