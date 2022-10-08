import styled from "styled-components";
import { ButtonCart } from "../Header/styled";

export const ContainerCard = styled.div`
  border-radius: 0.6rem;
  box-shadow: #2da77a 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 4px 6px 0px,
    #2da77a 0px -2px 0px inset;
  display: flex;
  flex-direction: column;
  min-height: 10.6rem;
  justify-content: space-around;
  padding: 1rem 1rem;
  flex-grow: 1;
  width: 22rem;
  max-width: 22rem;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

export const DivPriceButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

export const Price = styled.p`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: end;
`;

export const ButtonAdd = styled(ButtonCart)`
  width: 100%;
  cursor: pointer;
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const ButtonSoldOff = styled(ButtonCart)`
  background-color: #d9d9d9;
  color: #111111;
  cursor: not-allowed;
  width: 100%;
`;
