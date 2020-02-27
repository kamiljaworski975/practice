import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4em;
  background: ${({ theme }) => theme.body};
  transition: all 0.25s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
