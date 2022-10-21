// Importaciones
import styled from "styled-components";

export const LineBlue = styled.div`
  border-bottom: 1px solid var(--color-blue);
  width: 20%;
  margin-top: -12px;
  margin-left: 20px;

  @media screen and (max-width: 486px) {
    display: none;
  }
`;
export const ColThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 36px;
  flex-wrap: wrap; 
`;
export const Lenguajes = styled.div`
  background-color: #f4faff;
  padding: 36px;
  border-radius: 30px;
  width: 32%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 300ms;
    @media screen and (max-width: 960px) {
      width: 100%;
      margin: 15px 0;
    }
`;
export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-blue);
  margin-bottom: 8px;
`;
export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #474747;
  margin-bottom: 36px;
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  max-width: 930px;
  margin: 0 auto;
  
`;
export const WrapperIcons = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 960px){
      justify-content: center;
      gab: 20px;
      flex-wrap: wrap;
  }
`
export const ImgIcons = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 cursor: pointer;
  img{
    padding: 8px 20px;
    transition: all 200ms;
    cursor: pointer;
  }
`
export const Mostrar = styled.div`
  opacity: ${({click}) => (click ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarOne = styled.div`
  opacity: ${({clickOne}) => (clickOne ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarTwo = styled.div`
  opacity: ${({clickTwo}) => (clickTwo ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarTres = styled.div`
  opacity: ${({clickTres}) => (clickTres ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarCuatro = styled.div`
  opacity: ${({clickCuatro}) => (clickCuatro ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarCinco = styled.div`
  opacity: ${({clickCinco}) => (clickCinco ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarSeis = styled.div`
  opacity: ${({clickSeis}) => (clickSeis ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  cursor: pointer;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
`
export const MostrarSiete = styled.div`
  opacity: ${({clickSiete}) => (clickSiete ? 1 : 0 )};
  position: absolute;
  top: 100px;
  z-index: 20;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  transition: all 300ms;
  background-color: #0a0d136a;
  backdrop-filter: blur(2px);
  font-size: 20px;
  
`
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
export const WrapperSection = styled.div`
  max-width: 1024px;
  padding: 120px 0;
  @media screen and (max-width: 1024px) {
    padding: 56px 16px;
  }
`;
export const Separator = styled.div`
  border-bottom: 1px solid var(--color-blue);
  text-align: center;
  width: 10%;
`
export const TitleH3 = styled.h3`
  color: #000;
  font-size: 21px;
  font-weight: 200;
  text-align: center;
  margin: 36px 20px ;
`
export const ColSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ContentIcons = styled.p`
  font-size: 16px;
  margin-top: 21px;
  font-weight: 200;
  text-align: center;
`
export const NameContent = styled.div`
  text-align: center;
  background-color: #0f1520; 
  padding: 8px;
  border-radius: 8px;
  color: #dedddd;
  margin-top: 10px;
  font-weight: 700;
  letter-spacing: 1px; 
  transition: all 300ms;
  position: absolute;
  margin-left: 7px;
`