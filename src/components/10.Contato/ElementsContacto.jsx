import styled from "styled-components";

export const SectionContact = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Formulario = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 36px;
  }
`;
export const Preguntas = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Subtitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 39px;
  color: var(--color-bg-black);
`;
export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  padding: 120px 16px;
  @media screen and (max-width: 768px) {
    padding: 42px 16px;
  }
`
export const FormDate = styled.div`
  margin-top: 32px;

   label{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: var(--color-bg-black);
    margin: 28px 0px 16px;
   }
   input{
    width: 100%;
    background-color: #ECEFF7;
    border: none;
    border-radius: 5px;
    padding: 16px;
    font-size: 16px;
   }
   textarea {
    width: 100%;
    background-color: #ECEFF7;
    border: none;
    border-radius: 5px;
    padding: 16px;
    font-size: 16px;
    height: 160px;
   }
   button{
    background: #1081E8;
    border-radius: 100px;
    border: none;
    color: var(--color-white);
    padding: 16px 35px ;
    font-size: 16px;
    font-weight: 700;
    margin-top: 36px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        background-color: var(--color-bg-black);
    }
   }
`
export const Two = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

`
export const Cien = styled.div`
  width: 48%;
  input{
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`