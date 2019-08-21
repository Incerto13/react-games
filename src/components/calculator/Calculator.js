import React, { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";
import './Calculator.css';

// using context api
export const ScreenContext = React.createContext();

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const clearScreen = () => {
    setExpression("");
  };

  // this method will update parent state when called from children
  // this allows keyboard input directly to update screen
  const updateScreenFromKeyboard = expression => {
    setExpression(expression);
  };

  const updateScreenFromButton = input => {
    setExpression(expression + input);
  };

  // this calculates based upon the value (expression) currently on the Screen
  const evalScreen = () => {

    try {
      setExpression(eval(expression));
  } catch (e) {
          alert(e.message);
          // clear expression
          setExpression("");  
  } 
  };

  console.log(expression);
  return (
    <div>
      <div id="calc-contain">
        <div className="calculator">
          <ScreenContext.Provider value={expression}>
            <Screen updateScreenFromKeyboard={updateScreenFromKeyboard} />
          </ScreenContext.Provider>

          <br />

          <Button value={"1"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"2"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"3"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"+"} updateScreenFromButton={updateScreenFromButton} />

          <br />

          <Button value={"4"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"5"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"6"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"-"} updateScreenFromButton={updateScreenFromButton} />

          <br />

          <Button value={"7"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"8"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"9"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={"*"} updateScreenFromButton={updateScreenFromButton} />

          <br />

          <Button value={"C"} updateScreenFromButton={clearScreen} />

          <Button value={"0"} updateScreenFromButton={updateScreenFromButton} />

          <Button value={" = "} updateScreenFromButton={evalScreen} />

          <Button value={"/"} updateScreenFromButton={updateScreenFromButton} />

          <br />
        </div>
        <div id="agh">
          <p>Akin's React Calculator</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
