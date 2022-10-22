import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-black);
`;
export const ContainerWhite = styled(Container)`
  background-color: var(--color-white);
`;
export const ContainerWhiteBlue = styled(Container)`
  background-color: #ffffff;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  align-items: center;
  display: flex;
  @media screen and (max-width: 1070px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 1013px) {
    flex-direction: column-reverse;
  }
`;
export const WrapperSection = styled(Wrapper)`
  padding: 120px 0;
  @media screen and (max-width: 960px) {
    padding: 56px 16px;
  }
`;
export const WrapperTitle = styled(Wrapper)`
  padding: 120px 0 80px 0;
  @media screen and (max-width: 1037px) {
    padding: 56px 16px;
  }
`;
export const Photo = styled.div`
  width: 50%;
  text-align: center;
  box-sizing: border-box;
  @media screen and (max-width: 1013px) {
    width: 90%;
  }
  @media screen and (max-width: 590px) {
    width: 100%;
    padding: 0 16px;
  }
`;
export const Content = styled.div`
  margin-left: 30px;
  width: 50%;
  @media screen and (max-width: 1013px) {
    width: 90%;
  }
  @media screen and (max-width: 590px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const TitleSection = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: var(--color-bg-black);
  margin-bottom: 24px;
  @media screen and (max-width: 525px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 18px;
    margin-top: 10px;
  }
`;
export const TitleSectionWhite = styled(TitleSection)`
  color: var(--color-white);
  margin-bottom: 0px;
`;
export const ContentP = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-parrafo);
  @media screen and (max-width: 1013px) {
    margin-bottom: 26px;
  }
`;
export const ColTwo = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
export const LineBlue = styled.div`
  border-bottom: 1px solid var(--color-blue);
  width: 20%;
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (max-width: 486px) {
    display: none;
  }
`;
export const LineBlueTwo = styled.div`
  border-bottom: 1px solid var(--color-blue);
  width: 20%;
  margin-top: -14px;
  margin-left: 20px;
  @media screen and (max-width: 486px) {
    display: none;
  }
`;
//Globlal Error-404
export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-color: var(--color-bg-black);
  div {
    text-align: center;
  }
  h2 {
    color: var(--color-blue);
    font-size: 52px;
  }
  p {
    font-size: 18px;
    color: var(--color-parrafo);
    margin-bottom: 24px;
  }
  button {
    background-color: var(--color-blue);
    border: none;
    padding: 12px 42px;
    border-radius: 1000px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
