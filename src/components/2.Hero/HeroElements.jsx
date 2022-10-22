// Importaciones
import styled from "styled-components";

// Styled-Components
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  align-items: center;
  display: flex;
  height: 710px;
  @media screen and (max-width: 1070px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 1013px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
export const SubtitleHero = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 1px;
  color: var(--color-blue);
  @media screen and (max-width: 1013px){
    text-align: center;
  }
`
export const TitleHero = styled.h2`
  font-size: 70px;
  font-weight: 700;
  line-height: 84px;
  margin-bottom: 8px;
  color: var( --color-white);
  @media screen and (max-width: 527px){ 
    font-size: 40px;
    line-height: 55px;
  }
`
export const ContentHero = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: var(--color-content-dark);
  margin-bottom: 24px;
  @media screen and (max-width: 527px){
    font-size: 18px;
    line-height: 20px;
  }
`
export const LineHero = styled.div`
  height: 1px;
  background-color: var(--color-blue);
  width: 120px;
  margin-left: 20px;
  @media screen and (max-width: 1013px){
    display: none;
  }
`
export const ColTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1013px){
    text-align: center;
    justify-content: center;
  }
`
export const BtnHero = styled.button`
  background-color: var(--color-blue);
  padding: 18px 40px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 100px;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  &:hover {
    background-color: #fff;
    color: #0a0d13;
  }
`
export const ContImg = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 1013px){
    display: none;
  }
`
export const PhotoHero = styled.div`
  margin-right: 20px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 1013px){ 
    margin-right: 0px;  
  }
`
export const SectionContent = styled.div`
  @media screen and (max-width: 1013px){
    text-align: center;
    margin-top: 36px;
  }
`
export const Redes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1013px){
    justify-content: center;
  }
  svg{
    color: #444444;
    font-size: 52px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      color: #c8c8c8;
    }
  }
  span{
    border-bottom: 1px solid #444444;
    width: 30px;
    margin-right: 10px;
    
  }
  p{
    color: #444444;
    font-size: 14px;
  }

`