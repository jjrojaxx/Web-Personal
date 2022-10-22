import { ContainerWhite, TitleSection, ColTwo } from "../GloblaElements";
import {
  LineBlue,
  ColThree,
  Lenguajes,
  Title,
  Content,
  Icons,
  WrapperSection,
  Separator,
  TitleH3,
  ContainerIcons,
  ImgIcons,
  WrapperIcons,
  ColSubtitle,
  ContentIcons,
  Mostrar,
  MostrarOne,
  MostrarTwo,
  MostrarTres,
  MostrarCuatro,
  MostrarCinco,
  MostrarSeis,
  MostrarSiete,
} from "./HerramientasElements";
import { motion } from "framer-motion";
import { useState } from "react";

//Imagenes
import Notion from "../../assets/notion-black.svg";
import Figma from "../../assets/figma.svg";
import React from "../../assets/react.svg";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import JavaScript from "../../assets/Javascript.svg";
import ReactIcon from "../../assets/logos_react.svg";
import Sass from "../../assets/sass.svg";
import StyledComponent from "../../assets/styled-components.svg";
import Mui from "../../assets/mui.svg";
import Framer from "../../assets/framer.svg";

export default function Herramientas() {
  const [click, setClick] = useState(false);
  const ChangeClick = () => {
    setClick(!click);
  };

  const [clickOne, setClickOne] = useState(false);
  const ChangeClickOne = () => {
    setClickOne(!clickOne);
  };

  const [clickTwo, setClickTwo] = useState(false);
  const ChangeClickTwo = () => {
    setClickTwo(!clickTwo);
  };
  const [clickTres, setClickTres] = useState(false);
  const ChangeClickTres = () => {
    setClickTres(!clickTres);
  };
  const [clickCuatro, setClickCuatro] = useState(false);
  const ChangeClickCuatro = () => {
    setClickCuatro(!clickCuatro);
  };

  const [clickCinco, setClickCinco] = useState(false);
  const ChangeClickCinco = () => {
    setClickCinco(!clickCinco);
  };
  const [clickSeis, setClickSeis] = useState(false);
  const ChangeClickSeis = () => {
    setClickSeis(!clickSeis);
  };
  const [clickSiete, setClickSiete] = useState(false);
  const ChangeClickSiete = () => {
    setClickSiete(!clickSiete);
  };

  return (
    <section>
      <ContainerWhite id="lenguajes">
        <WrapperSection>
          <ColTwo data-aos="fade-up" data-aos-duration="8000">
            <TitleSection>Herramientas de trabajo</TitleSection>
            <LineBlue />
          </ColTwo>

          <ColThree data-aos="fade-up">
            <LenguajesT
              Object={{
                Title: "Organización",
                Content:
                  "La organización del tiempo es uno de los grandes retos a la hora de trabajar utilizamos estas herramientas para mejorar el rendimiento en los proyectos.",
                Icons: Notion,
                Alt: "Notion",
              }}
            />
            <LenguajesT
              Object={{
                Title: "Diseño web",
                Content:
                  "Diseño UX/UI Creación de interface pensada para los usuarios. Contenido, Wireframes y prototipado un diseño sencillo pero moderno.",
                Icons: Figma,
                Alt: "Figma",
              }}
            />
            <LenguajesT
              Object={{
                Title: "Desarrollo Web",
                Content:
                  " la creación de sitios web para Internet o una intranet. Para conseguirlo se hace uso de tecnologías de software del lado del servidor y del cliente.",
                Icons: React,
                Alt: "React",
              }}
            />
          </ColThree>

          <ColSubtitle data-aos="fade-up">
            <Separator />
            <TitleH3>Lenguajes - Framework</TitleH3>
            <Separator />
          </ColSubtitle>
          <ContainerIcons data-aos="fade-up">
            <WrapperIcons>
              <ImgIcons onMouseEnter={() => ChangeClick()}>
                <motion.img
                  src={Html}
                  alt="Html"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: -9 }}
                />
                <Mostrar click={click}>Html</Mostrar>
              </ImgIcons>
              <ImgIcons onMouseEnter={() => ChangeClickOne()}>
                <motion.img
                  src={Css}
                  alt="Css"
                  title="Click"
                  loading="lazy"
                  width="100%"
                  whileHover={{ rotate: -9 }}
                />
                <MostrarOne clickOne={clickOne}>Css</MostrarOne>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickTwo()}>
                <motion.img
                  src={JavaScript}
                  alt="JavaScript"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: 9 }}
                />
                <MostrarTwo clickTwo={clickTwo}>JavaScript</MostrarTwo>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickTres()}>
                <motion.img
                  src={ReactIcon}
                  alt="React.js"
                  width="100%"
                  loading="lazy"
                  title="Click"
                  whileHover={{ rotate: -9 }}
                />
                <MostrarTres clickTres={clickTres}>React.js</MostrarTres>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickCuatro()}>
                <motion.img
                  src={Sass}
                  alt="Sass"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: 8 }}
                />
                <MostrarCuatro clickCuatro={clickCuatro}>Sass</MostrarCuatro>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickCinco()}>
                <motion.img
                  src={StyledComponent}
                  alt="styled-components"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: -9 }}
                />
                <MostrarCinco clickCinco={clickCinco}>
                  styled components
                </MostrarCinco>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickSeis()}>
                <motion.img
                  src={Mui}
                  alt="Mui"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: 9 }}
                />
                <MostrarSeis clickSeis={clickSeis}>Mui</MostrarSeis>
              </ImgIcons>

              <ImgIcons onMouseEnter={() => ChangeClickSiete()}>
                <motion.img
                  src={Framer}
                  alt="Framer-Motion"
                  title="Click"
                  width="100%"
                  loading="lazy"
                  whileHover={{ rotate: -9 }}
                />
                <MostrarSiete clickSiete={clickSiete}>
                  Framer Motion
                </MostrarSiete>
              </ImgIcons>
            </WrapperIcons>
          </ContainerIcons>
          <ColSubtitle data-aos="fade-up">
            <ContentIcons>
              Click para mostrar el contenido de estas herramientas
            </ContentIcons>
          </ColSubtitle>
        </WrapperSection>
      </ContainerWhite>
    </section>
  );
}

function LenguajesT(props) {
  return (
    <Lenguajes>
      <Title className="Black">{props.Object.Title}</Title>
      <Content className="White">{props.Object.Content}</Content>
      <Icons>
        <img
          src={props.Object.Icons}
          alt={props.Object.Alt}
          loading="lazy"
          title="icons"
        />
      </Icons>
    </Lenguajes>
  );
}
