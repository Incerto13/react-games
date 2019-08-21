import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/calculator" activeStyle={activeStyle}>
        Calculator
      </NavLink>
      {" | "}
      <NavLink to="/chess" activeStyle={activeStyle}>
        Chess
      </NavLink>
      {" | "}
      <NavLink to="/nba-trivia" activeStyle={activeStyle}>
        NBA Trivia
      </NavLink>
      {" | "}
      <NavLink to="/youtube-fetch" activeStyle={activeStyle}>
        Youtube Fetch
      </NavLink>
    </nav>
  );
};

export default Header;
