import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
import "./App.css";
export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  function toggleGamePlay() {
    setGameStarted((prev) => !prev);
  }

  return (
    <>{gameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}
