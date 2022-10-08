import styled from "styled-components";
import { ButtonOrder } from "../../components/Header/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const BoxFilters = styled.div`
  align-items: center;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 90%;
  width: 100%;
`;

export const OrderBy = styled.img`
  height: 2rem;
  cursor: pointer;
`;

export const ButtonOrderBy = styled(ButtonOrder)`
  align-items: center;
  /* height: 2.6rem; */
  padding: 0.2rem 0.6rem;
  justify-content: center;
  display: flex;
`;

export const BoxCards = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 90%;
`;
