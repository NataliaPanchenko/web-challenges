import styled, { css } from "styled-components";

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}
`;

export default BoxWithStyledComponents;
