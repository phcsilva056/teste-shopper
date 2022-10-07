import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: #f5f7f9 0px 8px 20px 0px;
  display: flex;
  flex-direction: column;
  height: 78px;
  position: sticky;
  width: 100%;
`;

export const LineHeader = styled.span`
  background-color: #2da77a;
  height: 6px;
  width: 100%;
`;

export const DivHeader = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

export const ImgLogo = styled.img`
  height: 26px;
`;

export const Divisor = styled.span`
  height: 100%;
  width: 2rem;
`;

export const NavHeader = styled.nav`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  height: 100%;
`;

export const ButtonNormal = styled.button`
  background-color: unset;
  border: none;
  font-size: 1rem;
  font-weight: 700;
`;

export const ButtonCart = styled.button`
  background-color: #2da77a;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem 1.2rem;
`;
