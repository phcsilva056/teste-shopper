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
  width: 52rem;
  max-width: 98%;
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

export const Input = styled.input`
  background-color: #fbfefd;
  border: #2da77a 1px solid;
  border-radius: 8px;
  outline-width: 0;
  box-shadow: #2da77a 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
    #2da77a 0px -1px 0px inset;
  font-size: 1.2rem;
  font-weight: 700;
  height: 2.6rem;
  max-width: 52rem;
  padding: 0 1rem;
  width: 100%;
`;
