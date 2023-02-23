import { useState } from "react";
import "./App.css";
import CaculatePad from "./CaculatePad";

function App() {
  const [number, setNumber] = useState(0);

  const numberDisplayHandler = (number) => {
    setNumber(number);
  };

  return (
    <div className="App">
      <div className="padcanvas">
        <div className="inputpad">
          <h className="display">{number}</h>
        </div>
        <CaculatePad numberDisplayHandler={numberDisplayHandler} />
      </div>
    </div>
  );
}

export default App;
