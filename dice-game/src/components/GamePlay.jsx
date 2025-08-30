import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { Button, OutlineButton } from "./Styled/Button";
import { useState } from "react";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState("");
  const [currentDice, setCurrentDice] = useState(2);
  const [error, setError] = useState("");
  const [showRule, setShowRules] = useState(false);

  function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function rollDice() {
    if (!selectedNum) {
      setError("You haven't selected a number");
      return;
    }

    let gntrandom = randomNumber(7, 1);
    setCurrentDice(gntrandom);

    if (parseInt(selectedNum) === gntrandom) {
      setScore((prev) => prev + gntrandom);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum("");
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          setError={setError}
          error={error}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRule ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showRule && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 4rem;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;
