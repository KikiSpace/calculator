import { useState } from "react";
import "./CaculatePad.css";
import Pad from "./Pad";
const TYPE = {
  DARKER: "darker-grey",
  LIGHTER: "lighter-grey",
  WIDER: "wider-grey",
  YELLOW: "yellow",
  LEFT: "wider-grey left",
  RIGHT: "yellow right",
};

const CaculatePad = (props) => {
  const [prevNum, setPrevNum] = useState("0");
  const [curNum, setCurNum] = useState("0");
  const [operater, setOperater] = useState("+");
  const [display, setDisplay] = useState(0);

  const numberHandler = (num) => {
    let newNumber = curNum + num;
    const newDisplay = Number(newNumber);
    props.numberDisplayHandler(newDisplay);
    setDisplay(newNumber);
    setCurNum(String(newDisplay));
  };

  const operatorHandler = (operater) => {
    evaluate();
    setOperater(operater);
  };

  const evaluate = () => {
    let res = eval(prevNum + operater + curNum);
    props.numberDisplayHandler(Number(res));
    setDisplay(Number(res));
    setPrevNum(String(res));
    setCurNum(0);
    setOperater("+");
  };

  const clearup = () => {
    setPrevNum("0");
    setCurNum("0");
    setOperater("+");
    props.numberDisplayHandler(0);
    setDisplay(0);
  };

  const MinorNegative = () => {
    let newNumber = display * -1;
    props.numberDisplayHandler(newNumber);
    setDisplay(newNumber);
    setCurNum(String(newNumber));
    setPrevNum("0");
    setOperater("+");
  };

  return (
    <div className="mainpad">
      <Pad classes={TYPE.DARKER} onClick={() => clearup()}>
        AC
      </Pad>
      <Pad classes={TYPE.DARKER} onClick={() => MinorNegative()}>
        +/-
      </Pad>
      <Pad classes={TYPE.DARKER} onClick={() => operatorHandler("%")}>
        %
      </Pad>
      <Pad classes={TYPE.YELLOW} onClick={() => operatorHandler("/")}>
        /
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(7)}>
        7
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(8)}>
        8
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(9)}>
        9
      </Pad>
      <Pad classes={TYPE.YELLOW} onClick={() => operatorHandler("*")}>
        *
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(4)}>
        4
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(5)}>
        5
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(6)}>
        6
      </Pad>
      <Pad classes={TYPE.YELLOW} onClick={() => operatorHandler("-")}>
        -
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(1)}>
        1
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(2)}>
        2
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(3)}>
        3
      </Pad>
      <Pad classes={TYPE.YELLOW} onClick={() => operatorHandler("+")}>
        +
      </Pad>
      <Pad classes={TYPE.LEFT} onClick={() => numberHandler(0)}>
        0
      </Pad>
      <Pad classes={TYPE.LIGHTER} onClick={() => numberHandler(".")}>
        .
      </Pad>
      <Pad classes={TYPE.RIGHT} onClick={() => evaluate("=")}>
        =
      </Pad>
    </div>
  );
};

export default CaculatePad;