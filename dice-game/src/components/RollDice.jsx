import styled from "styled-components";

function RollDice({ currentDice, rollDice }) {
  return (
    <DiceRoller>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceRoller>
  );
}

export default RollDice;

const DiceRoller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  p {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .dice {
    cursor: pointer;
  }
`;
