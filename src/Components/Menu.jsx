import '../App.css';
import React,{useContext} from "react";
import { GameStateContext } from "../Helpers/Contexts";

function Menu() {
// eslint-disable-next-line
const { gameState, setGameState} = useContext(
    GameStateContext
  );
  
  return (
    <div className="Menu">
      <h1>Main Menu</h1>
      <button onClick={() => {setGameState("quiz");}}>Start Quiz</button>
        
    
    </div>
  );
}

export default Menu;
// eslint-disable-next-line
{/*
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
*/}
