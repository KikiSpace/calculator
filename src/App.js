import { useState } from "react";
import "./App.css";
import CalculatePad from "./CalculatePad";

function App() {
  const [number, setNumber] = useState(0);

  const numberDisplayHandler = (number) => {
    setNumber(number);
  };

  const displayNumber = (number) => {
    return String(number).slice(0, 8);
  };

  return (
    <div className="App">
      <div className="padcanvas">
        <div className="inputpad">
          <h className="display">{displayNumber(number)}</h>
        </div>
        <CalculatePad numberDisplayHandler={numberDisplayHandler} />
      </div>
    </div>
  );
}

export default App;
