import styled from "styled-components";

export const WrapperSection = styled.div`
  max-width: 1024px;
  padding: 120px 16px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 80px 16px;
  }
`;
export const ColTwo = styled.div`
  display: flex;
  align-items: center;
`;
export const LineBlue = styled.div`
  border-bottom: 1px solid var(--color-blue);
  width: 20%;
  margin-top: -19px;
  margin-left: 20px;
  @media screen and (max-width: 486px) {
    display: none;
  }
`;
export const Content = styled.div`
  color: #8590a7;
  font-weight: 400;
  font-size: 16px;
  span {
    color: red;
  }
`;
export const SeccionTwo = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
export const Card = styled.div`
  border-radius: 25px;
  width: 100%;
  padding: 10px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 700px) {
    padding: 10px 0px;
  }
`;
export const ContentTitle = styled.div`
  width: 100%;
  margin-bottom: 36px;
`;
export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 39px;
  color: var(--color-white);
  margin-bottom: 8px;
`;

export const Photo = styled.div`
  width: 100%;
  margin-bottom: -4px;
`;
export const BgBlack = styled.div`
  background-color: #151b27;
  padding: 36px;
  border-radius: 0 0 30px 30px;
  @media screen and (max-width: 425px) {
    padding: 36px 20px;
  }
  a {
    text-decoration: none;
  }
`;
export const CardContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #a3a3a3;
  margin-bottom: 24px;
`;
export const LinkMore = styled.div`
  color: var(--color-blue);
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
export const Wrap = styled.div`
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  a {
    text-decoration: none;
    position: relative;
  }
`;
export const Contenido = styled.div`
  padding-left: 20px;
  @media screen and (max-width: 700px) {
    padding-left: 0px;
  }
`;
export const LenguajesUse = styled.div`
  background-color: #151b27ca;
  padding: 10px 8px;
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 3;
  border-radius: 20px;
  display: flex;
  backdrop-filter: blur(4px);
  @media screen and (max-width: 425px) {

  }
  img{
    margin: 0 3px;
  }
`
