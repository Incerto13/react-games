import React from "react";

const Button = props => {
  const handleClick = event => {
    props.updateScreenFromButton(event.target.value);
  };

  return <input type="button" value={props.value} onClick={handleClick} />;
};

export default Button;
