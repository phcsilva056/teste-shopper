import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const DivSpace = styled.span`
  height: 2rem;
  width: 100%;
`;

export const LineTable = styled.tr`
  background-color: #2da77a;
`;

export const Table = styled.table`
  background-color: #10453b;
  margin: 0 auto;
  max-width: 90%;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (max-width: 580px) {
  font-size: 0.9rem;    
  }
`;

export const CellTableTitle = styled.th`
  cursor: pointer;
  padding: 1rem 0.2rem;
  text-align: center;
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;