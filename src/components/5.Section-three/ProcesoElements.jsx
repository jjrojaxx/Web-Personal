import styled from "styled-components";

export const WrapperSection = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  padding:  0 0 80px 0px;
  align-items: center;
  @media screen and (max-width: 1037px) {
    padding: 42px 16px;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`
export const ContentDesarrollo = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  width: 37%;
  margin-left: 35%;
  @media screen and (max-width: 1037px){
    width: 52%;
    margin-left: 45%;
  }
  @media screen and (max-width: 960px) {
    position: relative;
    width: 100%;
    margin-left: 0;
    margin-bottom: 24px;
  }
`
export const ContentDesarrolloTwo = styled(ContentDesarrollo)`
  justify-content: left;
  text-align: left;
  z-index: 2;
  margin: 0;
  @media screen and (max-width: 960px) {
    margin-top: 24px;
  }
`
export const Subtitle = styled.span` 
  font-size: 18px;
  font-weight: 400;
  color: var(--color-blue);
  margin-bottom: 8px;
`
export const TitleH3 = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 36px;
  @media screen and (max-width: 375px){
    font-size: 24px;
  }
`
export const Content = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  color: var(--color-white);
  background-color: #020203b6;
  backdrop-filter: blur(3px);
  padding: 36px;
  border-radius: 10px; 
  margin-bottom: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 486px){
    padding: 0px;
    background-color: rgba(0, 0, 0, 0.0);
  }
`
export const IconsProgran = styled.div`
  
`
export const PhotoR = styled.div`
  box-sizing: border-box;
  width: 65%;
  @media screen and (max-width: 960px){
    width: 100%;
  }
`  
export const PhotoL = styled.div`
  box-sizing: border-box;
  width: 65%;
  margin-left: 37%;
  @media screen and (max-width: 960px){
    width: 100%;
    margin-left: 0;
  }
`  