import styled from "styled-components";
import { ButtonOrder } from "../../components/Header/styled";
import { Input, LineTable, Table } from "../../global/GeneralStyled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const InputDate = styled(Input)`
  width: 14rem;
`;

export const InputName = styled(Input)`
  width: 90%;
  max-width: 28rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TableOrder = styled(Table)`
  width: 52rem;
  max-width: 98%;
`;

export const Empty = styled.td.attrs({ colSpan: 3 })`
  background-color: #ffffff;
  height: 2rem;
  font-size: 1.2rem;
  text-align: center;
`;

export const TdTotalTitle = styled.td.attrs({ colSpan: 3 })`
  font-size: 1.2rem;
  text-align: center;
`;
export const TdTotal = styled.td.attrs({ colSpan: 3 })`
  background-color: #2da77a;
  color: #111111;
  font-size: 1.2rem;
  text-align: center;
`;

export const LineTableTotal = styled(LineTable)`
  background-color: #3d3d5e;
  height: 3rem;
  color: #ffffff;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  width: 100%;
`;

export const Button = styled(ButtonOrder)``;
