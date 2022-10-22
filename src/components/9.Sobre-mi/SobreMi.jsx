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
    <section>
      <Container id="sobre">
        <WrapperSection>
          <Contenedor>
            <Photo data-aos="fade-right">
              <img
                src={PhotoSobre}
                alt="Joseph Leal"
                title="Joseph Leal"
                loading="lazy"
                width="100%"
              />
            </Photo>
            <Contenido data-aos="fade-left">
              <Title>¿ Sobre mi ?</Title>
              <Content>
                Hola a todos mi nombre es Joseph Leal un emprendedor por la
                tecnología empecé en el 2020 con html, css y Javascript creando
                sitos webs sencillos.
                <br />
                <br />
                Mi enfoque principal por ahora es emprender como programador
                estableciendo mi creatividad y habilidades.
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
                  href="https://www.linkedin.com/in/joseph-leal-d2000"
                  target="_blank"
                  whileHover={{ rotate: -9 }}
                >
                  <AiFillLinkedin />
                </motion.a>
              </Redes>
              <ColTwo>
                <a
                  href="https://drive.google.com/file/d/11Ye7tDEdHCZSd3li37GmJb4acYmGJpZ_/view?usp=sharing"
                  target="blank"
                >
                  <BtnWhite> Curriculum</BtnWhite>
                </a>
              </ColTwo>
            </Contenido>
          </Contenedor>
        </WrapperSection>
      </Container>
    </section>
  );
}
