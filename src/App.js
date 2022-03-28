import React, { useState } from 'react';
import './App.css';
import PopUp from './components/PopUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [popUpActive, setPopUpActive] = useState();
  return (
    <div className="App">
      <main>
        <Button
          variant="primary"
          size="lg"
          className="open-btn"
          onClick={() => setPopUpActive(true)}
        >
          Open PopUp
        </Button>
      </main>
      <PopUp active={popUpActive} setActive={setPopUpActive}></PopUp>
    </div>
  );
};

export default App;
