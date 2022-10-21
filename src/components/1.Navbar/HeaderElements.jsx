// Importaciones
import styled from "styled-components";


//styled-components
export const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  height: 80px;
  background-color: #0a0d13d7;
  backdrop-filter: blur(5px);
`
export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1070px){
    padding: 0 16px;
  }
`
export const IconLogo = styled.div`
  cursor: pointer; 
`
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 300px;
    height: 85vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-400px' )};
    flex-direction: column;
    transition: 0.2s all ease-in;
    background: var(--color-bg-black);
  }
`
export const MenuItems = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0.5px 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 960px){
    width: 100%;
    height: 100px;
    justify-content: start;
  }
  &:hover{
    border-bottom: 5px solid var(--color-blue);
    transition: 0.2s ease-in;
    background: #1080e813;
  }
`
export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 960px){
    width: 100%;
    justify-content: start;
  }
`
export const MenuItemLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
  font-weight: 700;
  padding: 10px 0px;
  cursor: pointer;
  @media screen and (max-width: 960px){
    padding: 5px 0px;
    width: 100%;
  }
`
export const BtnContact = styled.button`
  border: none;
  background: var(--color-blue);
  border-radius: 100px;
  color: var(--color-white);
  font-weight: 700;
  padding: 14px 36px;
  cursor: pointer;
  font-size: 16px;
  transition: all 300ms;
  margin-left: 20px;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-bg-black);
  }
  @media screen and (max-width: 960px){
    width: 100%;
    margin: 0 16px 20px 16px;
    
  }
`
export const IconLogoMobile = styled.div`
  color: var(--color-blue);
  font-size: 24px;
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  } 
`