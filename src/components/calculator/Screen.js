import React, { useContext } from "react";
import { ScreenContext } from "./Calculator";

const Screen = props => {
  // Context API + useContext hook
  const expression = useContext(ScreenContext);

  const handleChange = event => {
    props.updateScreenFromKeyboard(event.target.value);
  };

  return (
    <input
      type="text"
      value={expression}
      onChange={handleChange}
      ref={input => input && input.focus()}
    />
  );
};

export default Screen;
