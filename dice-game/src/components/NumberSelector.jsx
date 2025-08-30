import styled from "styled-components";

function NumberSelector({ selectedNum, setSelectedNum, error, setError }) {
  const boxNumber = [1, 2, 3, 4, 5, 6];

  function handleNumSelector(value) {
    setSelectedNum(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="content">
        {boxNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNum}
            key={i}
            onClick={() => handleNumSelector(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .content {
    display: flex;
    gap: 2rem;
  }
  p {
    padding-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .error {
    color: var(--red);
  }
`;

const Box = styled.div`
  height: 7.2rem;
  width: 7.2rem;
  border: 1px solid var(--black);
  display: grid;
  place-items: center;
  font-size: 3rem;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
