import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 20rem;
  text-align: center;

  h1 {
    font-size: 10rem;
    line-height: 10rem;
  }

  p {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
