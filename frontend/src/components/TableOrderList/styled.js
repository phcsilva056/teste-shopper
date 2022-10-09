import styled from "styled-components";

export const CellTable = styled.td`
  background-color: #fbfefd;
  padding: 0.5rem 0.2rem;
  text-align: center;
`;

export const DivQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Amount = styled.p`
  font-size: 1.2rem;
`;

export const Button = styled.button`
  background-color: #2da77a;
  border: none;
  border-radius: 50px;
  color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5rem;
  font-weight: 700;
  height: 1.5rem;
  line-height: 1px;
  text-justify: center;
  text-align: center;
  width: 1.5rem;
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const ButtonMax = styled(Button)`
  background-color: #d9d9d9;
  color: #111111;
`;

export const ButtonRemove = styled(Button)`
  background-color: #a72d37;
`;
