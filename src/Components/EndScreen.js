import "../App.css";
import React from "react";
// eslint-disable-next-line
import {useState,useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { GameStateContext } from "../Helpers/Contexts";

function EndScreen() {

const { score, setScore, setGameState } = useContext(
    GameStateContext
  );
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  
  return (
    <div className="EndScreen">
     {" "}
      <h1>End of Questions</h1>
      <h3>
           {" "}
           {score}/{Questions.length}{" "}
      
      </h3>
      <button onClick={restartQuiz}>Restart Game</button>
      
        
    
    </div>
  );
}

export default EndScreen;
