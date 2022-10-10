import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
`;

export const TextLoading = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 900;
`;

export const LoadingImg = styled.img`
  width: 6rem;
  border-radius: 100px;
`;
