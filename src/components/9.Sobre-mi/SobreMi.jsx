//Importaciones
import {
  Contenedor,
  Photo,
  Contenido,
  Title,
  Content,
  BtnWhite,
  ColTwo,
  Redes,
} from "./ElementsSobreMi";
import { Container, WrapperSection } from "../GloblaElements";
import PhotoSobre from "../../assets/photo-sobre-mi.png";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
//JSX
export default function SobreMi() {
  return (
    <Container id="sobre">
      <WrapperSection>
        <Contenedor>
          <Photo>
            <img src={PhotoSobre} alt="Joseph Leal" width="100%" />
          </Photo>
          <Contenido>
            <Title>¿ Sobre mi ?</Title>
            <Content>
              Hola a todos mi nombre es Joseph Leal un emprendedor por la
              tecnologia emepece en el 2020 con html css y Javascript creando
              sitos webs sencillos.
              <br />
              <br />
              Mi enfoque principal por ahora es emprender como programador
              estableciendo mi creativadad y habilidades.
            </Content>

            <Redes>
              <motion.a
                href="https://github.com/jjrojaxx"
                target="_blank"
                whileHover={{ rotate: 9 }}
              >
                <AiFillGithub />
              </motion.a>
              <motion.a
                href="https://twitter.com/jjrojaxx"
                target="_blank"
                whileHover={{ rotate: -9 }}
              >
                <AiOutlineTwitter />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/joseph_leal200/"
                target="_blank"
                whileHover={{ rotate: 9 }}
              >
                <AiOutlineInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jos%C3%A9-rojas-294ba520b/"
                target="_blank"
                whileHover={{ rotate: -9 }}
              >
                <AiFillLinkedin />
              </motion.a>
            </Redes>
            <ColTwo>
              <a href="https://drive.google.com/file/d/11Ye7tDEdHCZSd3li37GmJb4acYmGJpZ_/view?usp=sharing">
                <BtnWhite> Curriculum</BtnWhite>
              </a>
            </ColTwo>
          </Contenido>
        </Contenedor>
      </WrapperSection>
    </Container>
  );
}