import {
  WrapperFooter,
  Photo,
  ColFour,
  Content,
  TitleFooter,
  Link,
  ColFourt,
  Copy
} from "./ElementsFooter";
import { Container } from "../GloblaElements";
import Logo from "../../assets/logo-footer.svg";
import { AiFillLinkedin, AiOutlineInstagram, AiFillTwitterSquare, AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
<footer> 
    <Container>
      <WrapperFooter>
        <ColFourt>
          <Photo>
          <a href="/" >
            <img src={Logo} alt="Logo" title="Joseph leal" loading="lazy"/>
          </a>
          </Photo>
          <Content>
          Programador frontend dedicado, me especializo en la maquetación y desarrollo de funciones creativas para el usuario... 
          </Content>
        </ColFourt>
        <ColFour>
          <TitleFooter>Redes Sociales</TitleFooter>
          <Link><a href="https://www.linkedin.com/in/jos%C3%A9-rojas-294ba520b/" ><AiFillLinkedin className="icons"/> Linkedin</a></Link >
          <Link><a href="https://www.instagram.com/joseph_leal200/" ><AiOutlineInstagram className="icons" /> Instagram</a></Link >
          <Link><a href="https://twitter.com/jjrojaxx" ><AiFillTwitterSquare className="icons" /> Twitter</a></Link >
          <Link><a href="https://github.com/jjrojaxx"><AiFillGithub className="icons" /> GitHub</a></Link >
        </ColFour>
      </WrapperFooter>
    </Container>
    <Copy>
       © 2022 lealjoseph.com Todos los derechos reservados. Realizado por Joseph Leal    
    </Copy>
 </footer>
  );
}
