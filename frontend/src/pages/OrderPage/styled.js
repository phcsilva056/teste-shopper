import styled from "styled-components";
import { CellTableTitle } from "../../global/GeneralStyled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CellTitle = styled(CellTableTitle)`
  cursor: default;
  :active {
    box-shadow: none;
  }
`;
