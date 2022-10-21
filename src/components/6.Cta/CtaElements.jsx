import styled from "styled-components";
import Bg from '../../assets/section-cta.png';
export const Container = styled.div`
 background-image: url(${Bg});
 background-repeat: no-repeat;
 background-position: center center;
 padding: 130px 0;
 display: flex;
 justify-content: center;
 @media screen and (max-width: 701px){
    padding: 100px 16px;
 }
`
export const Wrapper = styled.div`
  max-width: 1024px;
  text-align: center;
`
export const BtnBlack = styled.button`
 border: none;
 background-color: var(--color-bg-black);
 color: var(--color-white);
 border-radius: 100px;
 padding: 18px 40px;
 font-size: 16px;
 font-weight: 700;
 cursor: pointer;
 margin-top: 36px;
 &:hover {
    background-color: var(--color-white);
    color: var(--color-bg-black);
 }
`