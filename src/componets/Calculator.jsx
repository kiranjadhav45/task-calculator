import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("0");

  const handleOnClick = (event) => {
    const data = event.target.value;
    setResult(result.concat(data));
  };

  const handleOnClear = () => {
    setResult("");
  };

  const handleOnCalculat = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="main-container">
      <div className="centre">
        <div className="calculatorForm" name="calculatorForm">
          <input
            type="text"
            id="screen"
            className="screen"
            value={result}
            placeholder="0"
            readOnly
          />
          <div className="Abutton">
            <input type="button" id="seven" value="7" onClick={handleOnClick} />
            <input type="button" id="eight" value="8" onClick={handleOnClick} />
            <input type="button" id="nine" value="9" onClick={handleOnClick} />
            <input
              type="button"
              id="divide"
              value="/"
              onClick={handleOnClick}
            />
            <br />

            <input type="button" id="four" value="4" onClick={handleOnClick} />
            <input type="button" id="five" value="5" onClick={handleOnClick} />
            <input type="button" id="six" value="6" onClick={handleOnClick} />
            <input type="button" id="multi" value="*" onClick={handleOnClick} />
            <br />

            <input type="button" id="one" value="1" onClick={handleOnClick} />
            <input type="button" id="two" value="2" onClick={handleOnClick} />
            <input type="button" id="three" value="3" onClick={handleOnClick} />
            <input type="button" id="subs" value="-" onClick={handleOnClick} />
            <br />

            <input type="button" id="dot" value="." onClick={handleOnClick} />
            <input type="button" id="zero" value="0" onClick={handleOnClick} />
            <input type="button" id="add" value="+" onClick={handleOnClick} />
            <input
              type="button"
              className="clearbtn"
              value="clear"
              name="clear"
              onClick={handleOnClear}
            />
            <br />
            <input
              type="button"
              id="equal"
              value="="
              onClick={handleOnCalculat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
