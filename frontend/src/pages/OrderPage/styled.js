import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const BoxCards = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 90%;
`;
