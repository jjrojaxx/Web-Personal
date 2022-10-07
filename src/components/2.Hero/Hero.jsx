import HeroPhoto from "../../assets/joseph-leal-hero.svg";
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
    <Container>
      <Wrapper>
        <PhotoHero
          as={motion.div}
          variants={PhotoVarians}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <img src={HeroPhoto} alt="Joseph-leal" width="100%" />
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
              delay: 2
            }}
          >
            <SubtitleHero>Desarrollador Web</SubtitleHero> <LineHero />
          </ColTwo>
          <TitleHero
            as={motion.h1}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            Joseph Leal 💻
          </TitleHero>
          <ContentHero
            as={motion.p}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            Programador fron-end dedicado, me especializo en la maquetación y
            desarrollo de funciones creativas para el usuario...
          </ContentHero>
          <Redes
            as={motion.div}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 4, type: 'spring', damping: 8, mass: 2}}
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
            transition={{ delay: 2.6 }}
          >
            <img src={ArrowContact} alt="icon-Arrow" />
          </ContImg>
        </SectionContent>
      </Wrapper>
    </Container>
  );
}