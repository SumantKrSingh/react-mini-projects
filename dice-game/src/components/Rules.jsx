import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How To Play?</h2>
      <div className="text">
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After clicking on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then 2 ponts will be deducted.</p>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  .text {
    margin-top: 2.4rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
