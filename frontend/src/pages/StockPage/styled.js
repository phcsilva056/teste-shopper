import styled from "styled-components";

export const Container = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  background-color: #10453b;
  margin: 0 auto;
  max-width: 90%;
  font-size: 1rem;
  font-weight: 600;
`;

export const CellTableTitle = styled.th`
  cursor: pointer;
  padding: 1rem 0.2rem;
  text-align: center;
`;
