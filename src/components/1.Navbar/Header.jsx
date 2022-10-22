// Importaciones
import Logo from "../../assets/logo-joseph-leal.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  IconLogo,
  NavbarContainer,
  NavbarWrapper,
  MenuItemLink,
  Menu,
  BtnContact,
  MenuItems,
  MenuItem,
  IconLogoMobile,
} from "./HeaderElements";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

// JSX
export default function Header() {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogo>
          <a href="/" >
          <img src={Logo} alt="Logo" title="Josephleal.com" loading="lazy"/>
          </a>
        </IconLogo>

        <IconLogoMobile onClick={() => ChangeClick()}>
          {click ? <FaTimes /> : <FaBars />}
        </IconLogoMobile>
        <Menu click={click}>
          <Scroll
            className="pointer"
            to="lenguajes"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            <MenuItems onClick={() => ChangeClick()}>
              <MenuItemLink>lenguajes</MenuItemLink>
            </MenuItems>
          </Scroll>

          <Scroll
            className="pointer"
            to="desarrollo"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            <MenuItems onClick={() => ChangeClick()}>
              <MenuItemLink>Desarrollo</MenuItemLink>
            </MenuItems>
          </Scroll>
          <Scroll
            className="pointer"
            to="portafolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            <MenuItems onClick={() => ChangeClick()}>
              <MenuItemLink>Portafolio</MenuItemLink>
            </MenuItems>
          </Scroll>
          <Scroll
            className="pointer"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            <MenuItems onClick={() => ChangeClick()}>
              <MenuItemLink>Sobre mi</MenuItemLink>
            </MenuItems>
          </Scroll>

          <MenuItem onClick={() => ChangeClick()}>
            <Scroll
              className="pointer"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-btn"
            >
              <BtnContact>Contacto</BtnContact>
            </Scroll>
          </MenuItem>
        </Menu>
      </NavbarWrapper>
    </NavbarContainer>
  );
}
