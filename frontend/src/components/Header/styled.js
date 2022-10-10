import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: #f5f7f9 0px 8px 20px 0px;
  display: flex;
  flex-direction: column;
  height: 5rem;
  position: sticky;
  width: 100%;
  @media screen and (max-width: 580px) {
    min-height: 9rem;
    padding-bottom: 0.4rem;
  }
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
  @media screen and (max-width: 580px) {
    flex-direction: column;    
    justify-content: space-around; 
  }
`;

export const ImgLogo = styled.img`
  height: 2rem;
`;

export const Divisor = styled.span`
  height: 100%;
  width: 2rem;
  @media screen and (max-width: 580px) {
    width: 0;
    height: 0;
  }
`;

export const NavHeader = styled.nav`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  height: 100%;
  @media screen and (max-width: 580px) {
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
  }
`;

export const ButtonNormal = styled.button`
  background-color: unset;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  :hover{
    text-decoration: underline;
  }
`;

export const ButtonOrder = styled.button`
  background-color: #2da77a;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem 1.2rem;
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
