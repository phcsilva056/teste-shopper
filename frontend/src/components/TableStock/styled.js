import styled from "styled-components";

export const CellTable = styled.td`
  background-color: ${({ soldOff }) => (soldOff ? "#b53137" : "#fbfefd")};
  padding: 0.5rem 0.2rem;
  text-align: center;
`;
export const CellNameProductTable = styled.td`
  background-color: ${({ soldOff }) => (soldOff ? "#b53137" : "#fbfefd")};
  padding: 0.5rem 0.2rem;
  text-align: center;
  user-select: text;
`;
