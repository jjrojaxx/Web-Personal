import {
  Container,
  WrapperTitle,
  TitleSectionWhite,
  ColTwo,
  LineBlue,
} from "../GloblaElements";
import SecionContenido from "./SecionContenido";
import SecionContenidoTwo from "./SecionContenidoTwo";

//Imagenes
import PortNotion from "../../assets/organitation-notion.svg";
import IconNotion from "../../assets/icon-notion.svg";
import IconFigma from "../../assets/logo_figma.svg";
import PortFigma from "../../assets/portadaFigma.png";
import IconReact from "../../assets/React-icon.svg";
import PortDesarrollo from "../../assets/PortadaDesarrollo.png";

export default function ProcesoDeDesarrollo() {
  return (
    <section id="desarrollo">
      <Container>
        <WrapperTitle>
          <ColTwo>
            <TitleSectionWhite>Proceso de Desarrollo</TitleSectionWhite>
            <LineBlue />
          </ColTwo>
        </WrapperTitle>
      </Container>

      <SecionContenido
        objeto={{
          Photo: PortNotion,
          Subtitle: "Fase - 1",
          Title: "Organización en Notion",
          Content:
            "La organización del tiempo es uno de los grandes retos a la hora de trabajar, planificar proyectos y coordinar equipos se utiliza notion para darte una mejor experiencia a la hora de ver los procesos del proyecto desde el diseño hasta el desarrollo.",
          Icon: IconNotion,
        }}
      />
      <SecionContenidoTwo
        objeto={{
          Photo: PortFigma,
          Subtitle: "Fase - 2",
          Title: "Diseño de Interfaz Web",
          Content:
            "Diseño UX/UI Creación de interface pensada para los usuarios. Contenido, Wireframes y prototipado un diseño sencillo pero moderno y a la ves interactivo con el fin de hacer que los usurios se sientan agustos con el sitio web",
          Icon: IconFigma,
        }}
      />
      <SecionContenido
        objeto={{
          Photo: PortDesarrollo,
          Subtitle: "Fase - 3",
          Title: "Desarrollo Web",
          Content:
            "Ultima fase el desarrollo web se hace a través de diversos lenguajes de programación. depende del tipo del sitio web que se valla a realizar. El desarrollo web se divide, de forma general, en Frontend y Backend.",
          Icon: IconReact,
        }}
      />
    </section>
  );
}
