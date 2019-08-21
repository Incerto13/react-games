import React from "react";
import Header from './Header';
import chessScreenshot from '../images/chess.png';
import calculatorScreenshot from '../images/calculator.png';
import nbaScreenshot from '../images/nba-trivia.png';
import youtubeScreenshot from '../images/youtube-fetch.png';
import { Link } from "react-router-dom";



const HomePage = () => (
  <>
  <Header />
  <div className="jumbotron">
    <h1>React Games</h1>
    <p>Various games and small projects built with React.</p>
  </div>
  <div className="link-container">
    <div className="row">
      <Link to="/calculator" ><img  className="cell" src={calculatorScreenshot} alt="" /> </Link>
      <Link to="/chess"><img  className="cell" src={chessScreenshot} alt="" /></Link>
    </div>
    <div className="row bottom-row">
      <Link to="/nba-trivia"><img className="cell" src={nbaScreenshot} alt="" /></Link>
      <Link to="youtube-fetch"> <img  className="cell" src={youtubeScreenshot} alt="" /></Link>
    </div>
  </div>

  </>
);

export default HomePage;