import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  color: var(--white);
  background-color: var(--black);
  padding: 1rem 1.8rem;
  min-width: 22rem;
  border-radius: 3rem;
  border: 1px solid transparent;
  font-size: 1.6rem;
  transition: all 0.5s ease-in;
  &:hover {
    color: var(--black);
    background-color: var(--white);
    border: 0.1px solid var(--black);
    transition: all 0.3s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  &:hover {
    color: var(--white);
    background-color: var(--black);
    border: 0.1px solid var(--black);
  }
`;