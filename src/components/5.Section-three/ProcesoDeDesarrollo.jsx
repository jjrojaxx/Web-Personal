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
import PortNotion from "../../assets/organitation-notion.png";
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
          <ColTwo data-aos="fade-up">
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
          Alt:"icons",
          Lazy:"lazy"
        }}
      />
      <SecionContenidoTwo
        objeto={{
          Photo: PortFigma,
          Subtitle: "Fase - 2",
          Title: "Diseño de Interfaz Web",
          Content:
            "Diseño UX/UI Creación de interface pensada para los usuarios. Contenido, Wireframes y prototipado un diseño sencillo pero moderno y a la vez interactivo con el fin de hacer que el usuario se sienta agusto con el sitio web",
          Icon: IconFigma,
          Alt:"icons",
          Lazy:"lazy"
        }}
      />
      <SecionContenido
        objeto={{
          Photo: PortDesarrollo,
          Subtitle: "Fase - 3",
          Title: "Programación",
          Content:
            "Es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.",
          Icon: IconReact,
          Alt:"icons",
          Lazy:"lazy"
        }}
      />
    </section>
  );
}
