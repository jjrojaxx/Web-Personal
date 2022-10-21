//Importaciones
import styled from "styled-components";

//Styles
export const Photo = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Contenido = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-left: 0px;
  }
`;
export const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 36px;
  @media screen and (max-width: 375px){
    text-align: center;
  }
`;
export const Content = styled.p`
  color: var(--color-content-dark);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  @media screen and (max-width: 375px){
    text-align: center;
  }
`;
export const ColTwo = styled.div`
  display: flex;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  a{
    @media screen and (max-width: 375px){
      text-align: center;
    }
  }
`;
export const Btn = styled.button`
  border: none;
  background-color: var(--color-blue);
  padding: 18px 40px;
  color: #fff;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 300ms;
  &:hover {
    background-color: var(--color-blue);
  }
`;
export const BtnWhite = styled(Btn)`
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  &:hover {
    border: 1px solid var(--color-blue);
  }
  
`;
export const Redes = styled.div` 
  display: flex;
  margin-bottom: 24px;
  flex-direction: row;
  a{
    color: var(--color-white);
    font-size: 42px;
    margin-right: 8px;
    &:hover {
      color: var(--color-blue);
    }
  }
  @media screen and (max-width: 375px){
    justify-content: center;
  }
`