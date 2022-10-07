import styled from "styled-components";

export const WrapperFooter = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  max-width: 1024px;
  justify-content: start;
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
    padding: 80px 16px;
  }  
`
export const ColFour = styled.div`
  width: 40%;
  padding-left: 28px;
  a{
    padding: 20px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`
export const ColFourt = styled.div`
  width: 33%;
  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 25px;
    text-align: center;
  }
`
export const Photo = styled.div`
  margin-bottom: 16px;
`
export const Content = styled.p`
  color: #8590A7;
  font-weight: 400;
  font-size: 16px;  
`
export const TitleFooter = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 24px;
` 
export const Link = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
    a{
    color: var(--color-blue);
    padding: 0;
    text-decoration: none;
    transition: all 300ms;
    &:hover{
      color: #0b60b0;
    }
  }
`
export const Copy = styled.div`
  background-color: #0a0d13;
  border-top: 1px solid #ECEFF71A;
  padding: 34px 16px;
  text-align: center;
  color: #8590A7;
  font-size: 14px;
`