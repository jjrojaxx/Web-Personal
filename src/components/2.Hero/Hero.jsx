import HeroPhoto from "../../assets/joseph-leal-hero.png";
import ArrowContact from "../../assets/arrow-contact.svg";
import {
  LineHero,
  ColTwo,
  SubtitleHero,
  TitleHero,
  ContentHero,
  Redes,
  ContImg,
  PhotoHero,
  SectionContent,
  Wrapper,
} from "./HeroElements";
import { Container } from "../GloblaElements";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Hero() {
  const PhotoVarians = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 0,
      },
    },
  };
  const ContentVarians = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 1,
      },
    },
  };
  return (
    <section>
      <Container id="hero">
        <Wrapper>
          <PhotoHero
            as={motion.div}
            variants={PhotoVarians}
            initial="hidden"
            animate="visible"
            transition="transition"
          >
            <img
              src={HeroPhoto}
              width="100%"
              alt="Joseph leal"
              loading="lazy"
              title="Joseph leal"
            />
          </PhotoHero>
          <SectionContent
            as={motion.div}
            variants={ContentVarians}
            initial="hidden"
            animate="visible"
            transition="transition"
          >
            <ColTwo
              as={motion.div}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 1,
              }}
            >
              <SubtitleHero>Web Developer Front-End</SubtitleHero>
              <LineHero />
            </ColTwo>
            <TitleHero
              as={motion.h2}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Joseph Leal 💻
            </TitleHero>
            <ContentHero
              as={motion.p}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              Programador Frontend dedicado, me especializo en la maquetación y
              desarrollo de funciones creativas para el usuario...
            </ContentHero>
            <Redes
              as={motion.div}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, type: "spring", damping: 8, mass: 2 }}
            >
              <motion.a
                href="https://github.com/jjrojaxx"
                target="_blank"
                whileHover={{
                  rotate: 9,
                }}
              >
                <AiFillGithub />
              </motion.a>
              <span />
              <p>Version - 1.1.0</p>
            </Redes>
            <ContImg
              as={motion.div}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <img
                src={ArrowContact}
                alt="Flecha"
                title="Flecha"
                loading="lazy"
              />
            </ContImg>
          </SectionContent>
        </Wrapper>
      </Container>
    </section>
  );
}
