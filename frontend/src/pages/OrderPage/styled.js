import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const BoxFilters = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  max-width: 90%;
  width: 100%;
`;

export const InputSearch = styled.input`
  background-color: #fbfefd;
  border: #2da77a 1px solid;
  border-radius: 8px;
  outline-width: 0;
  box-shadow: #2da77a 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
    #2da77a 0px -1px 0px inset;
  height: 2.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 1rem;
  width: 100%;
`;

export const OrderBy = styled.img`
  height: 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
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
