import './App.css';
// eslint-disable-next-line
import React,{useState,useContext} from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { GameStateContext } from "./Helpers/Contexts";

function App() {
// eslint-disable-next-line
  const [gameState,setGameState]=useState("menu");
const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}>
      {gameState === "menu" && <Menu />}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="end" && <EndScreen/>}
     </GameStateContext.Provider> 
    
    </div>
  );
}

export default App;
